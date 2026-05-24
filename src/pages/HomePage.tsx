import { useState } from 'react';
import SpinWheel from '../components/SpinWheel';
import RarityReveal from '../components/RarityReveal';
import { StickerSvgMap } from '../components/StickerSvgs';
import { updateSpins } from '../firebase/firestore';
import { useAuth } from '../hooks/useAuth';
import { useCollection } from '../hooks/useCollection';
import { useDailySpin } from '../hooks/useDailySpin';
import type { Sticker } from '../types';

const HomePage: React.FC = () => {
  const { user, refreshUser } = useAuth();
  const { addSticker } = useCollection();
  const { canClaimDaily, claimDaily } = useDailySpin();
  const [revealedSticker, setRevealedSticker] = useState<Sticker | null>(null);
  const [lastWon, setLastWon] = useState<Sticker | null>(null);

  const handleSpinUsed = async (): Promise<void> => {
    if (!user) return;
    await updateSpins(user.uid, Math.max(0, user.spins - 1));
    await refreshUser();
  };

  const handleConfirm = async (): Promise<void> => {
    if (!revealedSticker) return;
    await addSticker(revealedSticker.id);
    setLastWon(revealedSticker);
    setRevealedSticker(null);
  };

  const LastSvg = lastWon ? StickerSvgMap[lastWon.svgComponent] : null;

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-10">
      <h1 className="mb-3 text-center font-hand text-6xl text-white">Spin the Sticker Wheel</h1>

      {canClaimDaily && (
        <button
          type="button"
          onClick={claimDaily}
          className="mb-4 rounded-full bg-emerald-500 px-5 py-2 font-semibold text-white"
        >
          Claim Daily Spin
        </button>
      )}

      <SpinWheel spins={user?.spins ?? 0} onSpinUsed={handleSpinUsed} onResult={setRevealedSticker} />

      {lastWon && LastSvg && (
        <div className="mt-8 w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
          <p className="text-sm uppercase tracking-wider text-slate-300">Last Won</p>
          <div className="mx-auto my-2 w-fit">
            <LastSvg size={85} />
          </div>
          <p className="font-hand text-3xl text-white">{lastWon.name}</p>
        </div>
      )}

      {revealedSticker && (
        <RarityReveal
          sticker={revealedSticker}
          onConfirm={handleConfirm}
          spinsLeft={user?.spins ?? 0}
          onSpinAgain={() => setRevealedSticker(null)}
        />
      )}
    </div>
  );
};

export default HomePage;
