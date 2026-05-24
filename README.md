# Stickerverse — Spin & Collect

A polished React + TypeScript sticker wheel game with animated spins, rarity reveals, collection tracking, Firebase auth/profile sync, and Stripe checkout packs.

## Screenshots

_Add screenshots here after deployment/local capture._

## Local setup

1. Install Node.js 18+
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy env file:
   ```bash
   cp .env.example .env
   ```
4. Start dev server:
   ```bash
   npm run dev
   ```

## Firebase setup

1. Create a Firebase project.
2. Enable Authentication providers:
   - Email/Password
   - Google
3. Create Firestore database.
4. Add Firestore security rules (users can only access their own profile):
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```
5. Fill all `VITE_FIREBASE_*` values in `.env`.

> If Firebase env vars are missing, the app gracefully falls back to localStorage mode.

## Stripe setup

1. Create a Stripe account at https://stripe.com.
2. Create 3 products and prices:
   - Starter Pack (5 spins) — $1.99
   - Adventurer Pack (15 spins) — $4.99
   - Legendary Pack (50 spins) — $14.99
3. Put those Price IDs in:
   - `VITE_STRIPE_5_SPINS_PRICE_ID`
   - `VITE_STRIPE_15_SPINS_PRICE_ID`
   - `VITE_STRIPE_50_SPINS_PRICE_ID`
4. Add publishable key and success/cancel URLs.

### Webhook setup (`checkout.session.completed`)

Create a backend endpoint and subscribe to Stripe event `checkout.session.completed`.
Use `client_reference_id` (set to Firebase uid by this app) to credit the correct user.

```ts
import express from 'express';
import Stripe from 'stripe';
import admin from 'firebase-admin';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const app = express();

app.post('/webhooks/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
  const signature = req.headers['stripe-signature'] as string;
  const event = stripe.webhooks.constructEvent(req.body, signature, process.env.STRIPE_WEBHOOK_SECRET!);

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const uid = session.client_reference_id;

    if (uid) {
      // map session price -> spin amount
      const amount = 15; // example mapping
      await admin.firestore().doc(`users/${uid}`).set(
        {
          spins: admin.firestore.FieldValue.increment(amount),
          totalSpins: admin.firestore.FieldValue.increment(amount)
        },
        { merge: true }
      );
    }
  }

  res.sendStatus(200);
});
```

## Environment variables

See `.env.example`:
- Firebase client config
- Stripe publishable key
- Stripe Price IDs
- Checkout success/cancel URLs

## Deploying to Vercel

1. Push repository to GitHub.
2. Import project in Vercel.
3. Add all env vars from `.env.example`.
4. Deploy.

## Money flow

Users pay through Stripe Checkout. Funds settle in your Stripe account balance, then Stripe pays out to your connected bank account according to your payout schedule.
