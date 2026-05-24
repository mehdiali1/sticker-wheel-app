import { loadStripe } from '@stripe/stripe-js';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PurchaseModal from '../components/PurchaseModal';
import { useAuth } from '../hooks/useAuth';

interface Package {
  name: string;
  spins: number;
  price: string;
  priceId: string | undefined;
  featured?: boolean;
  legendary?: boolean;
}

const packs: Package[] = [
  { name: 'Starter Pack', spins: 5, price: '$1.99', priceId: import.meta.env.VITE_STRIPE_5_SPINS_PRICE_ID },
  { name: 'Adventurer Pack', spins: 15, price: '$4.99', priceId: import.meta.env.VITE_STRIPE_15_SPINS_PRICE_ID, featured: true },
  { name: 'Legendary Pack', spins: 50, price: '$14.99', priceId: import.meta.env.VITE_STRIPE_50_SPINS_PRICE_ID, legendary: true }
];

const ShopPage: React.FC = () => {
  const { user } = useAuth();
  const [params] = useSearchParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const banner = useMemo(() => {
    if (params.get('success') === 'true') return { text: 'Payment successful! Spins will be credited by webhook.', color: 'bg-emerald-500/20 text-emerald-200' };
    if (params.get('cancelled') === 'true') return { text: 'Checkout cancelled.', color: 'bg-amber-500/20 text-amber-200' };
    return null;
  }, [params]);

  const purchase = async (priceId: string | undefined): Promise<void> => {
    if (!user) {
      setModalMessage('Please sign in before purchasing.');
      setModalOpen(true);
      return;
    }

    if (!priceId) {
      setModalMessage('Missing Stripe Price ID in env config.');
      setModalOpen(true);
      return;
    }

    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
    if (!stripe) {
      setModalMessage('Stripe failed to initialize.');
      setModalOpen(true);
      return;
    }

    await stripe.redirectToCheckout({
      lineItems: [{ price: priceId, quantity: 1 }],
      mode: 'payment',
      successUrl: import.meta.env.VITE_STRIPE_SUCCESS_URL,
      cancelUrl: import.meta.env.VITE_STRIPE_CANCEL_URL,
      clientReferenceId: user.uid
    });
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 text-white">
      <h1 className="mb-4 font-hand text-6xl">Spin Shop</h1>

      {banner && <div className={`mb-5 rounded-xl border border-white/10 p-3 ${banner.color}`}>{banner.text}</div>}

      <div className="grid gap-4 md:grid-cols-3">
        {packs.map((pack) => (
          <article
            key={pack.name}
            className={`relative rounded-2xl border p-6 shadow-xl ${
              pack.legendary
                ? 'border-amber-300/50 bg-gradient-to-br from-amber-700/25 to-[#180e2f]'
                : 'border-white/10 bg-gradient-to-br from-[#261644] to-[#140b29]'
            }`}
          >
            {pack.featured && <span className="absolute right-3 top-3 rounded-full bg-fuchsia-500 px-2 py-1 text-xs font-bold">Featured</span>}
            <h2 className="font-hand text-4xl">{pack.name}</h2>
            <p className="mt-2 text-3xl font-bold">{pack.price}</p>
            <p className="text-slate-300">{pack.spins} spins</p>
            <button
              type="button"
              onClick={() => purchase(pack.priceId)}
              className="mt-5 w-full rounded-full bg-violet-500 px-4 py-2.5 font-semibold"
            >
              Buy Now
            </button>
          </article>
        ))}
      </div>

      <PurchaseModal open={modalOpen} onClose={() => setModalOpen(false)} title="Shop notice" message={modalMessage} />

      {/*
        Stripe webhook setup (required to credit spins):

        1) In Stripe Dashboard, create a webhook endpoint (e.g. https://your-api.com/webhooks/stripe).
        2) Subscribe to `checkout.session.completed`.
        3) Verify webhook signature using STRIPE_WEBHOOK_SECRET.
        4) Read session.client_reference_id (this app sends Firebase uid there).
        5) Map session.line_items or price id to spin amount.
        6) Call addSpinsAfterPurchase(uid, amount) on your trusted server using Firebase Admin SDK.

        Example (Node/Express pseudo-flow):
        app.post('/webhooks/stripe', express.raw({type:'application/json'}), async (req,res) => {
          const event = stripe.webhooks.constructEvent(req.body, req.headers['stripe-signature'], process.env.STRIPE_WEBHOOK_SECRET);
          if (event.type === 'checkout.session.completed') {
            const session = event.data.object as Stripe.Checkout.Session;
            const uid = session.client_reference_id;
            const amount = mapPriceToSpins(session.metadata?.price_id || '');
            await addSpinsAfterPurchase(uid, amount);
          }
          res.sendStatus(200);
        });
      */}
    </main>
  );
};

export default ShopPage;
