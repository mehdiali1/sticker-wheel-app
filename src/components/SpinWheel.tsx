import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { rarityConfig, stickers } from '../data/stickers';
import type { Rarity, Sticker } from '../types';

interface SpinWheelProps {
  spins: number;
  onResult: (sticker: Sticker) => void;
  onSpinUsed: () => void;
}

const rarities: Rarity[] = ['common', 'uncommon', 'rare', 'epic', 'legendary'];
const segmentArc = 72;

const pickRarity = (): Rarity => {
  const roll = Math.random() * 100;
  let running = 0;

  for (const rarity of rarities) {
    running += rarityConfig[rarity].chance;
    if (roll <= running) {
      return rarity;
    }
  }

  return 'common';
};

const pickSticker = (rarity: Rarity): Sticker => {
  const pool = stickers.filter((sticker) => sticker.rarity === rarity);
  return pool[Math.floor(Math.random() * pool.length)] ?? stickers[0];
};

const polarToCartesian = (cx: number, cy: number, r: number, angle: number) => {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};

const segmentPath = (startAngle: number, endAngle: number): string => {
  const start = polarToCartesian(100, 100, 94, endAngle);
  const end = polarToCartesian(100, 100, 94, startAngle);
  return `M 100 100 L ${start.x.toFixed(2)} ${start.y.toFixed(2)} A 94 94 0 0 0 ${end.x.toFixed(2)} ${end.y.toFixed(2)} Z`;
};

const SpinWheel: React.FC<SpinWheelProps> = ({ spins, onResult, onSpinUsed }) => {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);

  const segments = useMemo(
    () =>
      rarities.map((rarity, index) => {
        const startAngle = index * segmentArc - 36 + (index % 2 === 0 ? -1.3 : 1.1);
        const endAngle = startAngle + segmentArc + (index % 2 === 0 ? 1.7 : -1.4);
        const midAngle = startAngle + (endAngle - startAngle) / 2;
        const textPoint = polarToCartesian(100, 100, 57, midAngle);
        return { rarity, startAngle, endAngle, textPoint };
      }),
    []
  );

  const handleSpin = async () => {
    if (spinning || spins <= 0) {
      return;
    }

    setSpinning(true);
    onSpinUsed();

    const rarity = pickRarity();
    const sticker = pickSticker(rarity);
    const targetIndex = rarities.indexOf(rarity);
    const targetAngle = targetIndex * segmentArc + segmentArc / 2;
    const extra = 6 + Math.floor(Math.random() * 3);
    const wobble = Math.random() * 8 - 4;
    const totalRotation = rotation + extra * 360 + (360 - targetAngle) + wobble;

    setRotation(totalRotation);

    setTimeout(() => {
      onResult(sticker);
      setSpinning(false);
    }, 3800);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative">
        <div className="absolute -top-8 left-1/2 z-20 h-0 w-0 -translate-x-1/2 border-x-[14px] border-t-0 border-b-[24px] border-x-transparent border-b-amber-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />

        <motion.div
          className="relative h-[310px] w-[310px] rounded-full border-4 border-violet-950 shadow-[0_0_35px_rgba(88,28,135,0.55)]"
          animate={{ rotate: rotation }}
          transition={{ duration: 3.8, ease: [0.12, 0.95, 0.15, 1] }}
        >
          <svg viewBox="0 0 200 200" className="h-full w-full rounded-full">
            {segments.map(({ rarity, startAngle, endAngle, textPoint }) => {
              const config = rarityConfig[rarity];
              return (
                <g key={rarity}>
                  <path d={segmentPath(startAngle, endAngle)} fill={config.color} stroke="#1f103a" strokeWidth={2.7} />
                  <text
                    x={textPoint.x}
                    y={textPoint.y - 3}
                    textAnchor="middle"
                    className="fill-white font-hand text-[8px]"
                  >
                    {config.label}
                  </text>
                  <text x={textPoint.x} y={textPoint.y + 8} textAnchor="middle" className="fill-white/95 text-[6px]">
                    {config.chance}%
                  </text>
                </g>
              );
            })}
            <circle cx="100" cy="100" r="19" fill="#1f1338" stroke="#facc15" strokeWidth={3.5} />
            <path d="M90 92 Q100 86 110 92" fill="none" stroke="#fef08a" strokeWidth={1.6} strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>

      <div className="rounded-full bg-amber-400/90 px-4 py-1.5 text-sm font-semibold text-black shadow-[0_0_10px_rgba(250,204,21,0.7)]">
        Spins: {spins}
      </div>

      <button
        type="button"
        onClick={handleSpin}
        disabled={spinning || spins === 0}
        className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-10 py-3 font-hand text-2xl tracking-wide text-white transition disabled:cursor-not-allowed disabled:opacity-50"
      >
        {spinning ? 'SPINNING...' : 'SPIN'}
      </button>
    </div>
  );
};

export default SpinWheel;
