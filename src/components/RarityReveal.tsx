import { motion } from 'framer-motion';
import { rarityConfig } from '../data/stickers';
import type { Sticker } from '../types';
import { StickerSvgMap } from './StickerSvgs';

interface RarityRevealProps {
  sticker: Sticker;
  onConfirm: () => void;
  onSpinAgain?: () => void;
  spinsLeft: number;
}

const RarityReveal: React.FC<RarityRevealProps> = ({ sticker, onConfirm, onSpinAgain, spinsLeft }) => {
  const config = rarityConfig[sticker.rarity];
  const StickerSvg = StickerSvgMap[sticker.svgComponent];
  const showParticles = sticker.rarity === 'epic' || sticker.rarity === 'legendary';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className={`relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 p-8 text-center shadow-2xl ${
          sticker.rarity === 'legendary'
            ? 'bg-[radial-gradient(circle_at_top,#f59e0b33,#1b1234_65%)]'
            : sticker.rarity === 'epic'
              ? 'bg-[radial-gradient(circle_at_top,#a855f733,#1b1234_65%)]'
              : 'bg-[#1b1234]'
        }`}
      >
        {showParticles &&
          Array.from({ length: 24 }).map((_, index) => {
            const angle = (index / 24) * 360;
            const distance = 90 + (index % 4) * 8;
            const x = Math.cos((angle * Math.PI) / 180) * distance;
            const y = Math.sin((angle * Math.PI) / 180) * distance;
            return (
              <motion.span
                key={index}
                className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: config.glow }}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: [0, 1, 0], x, y }}
                transition={{ duration: 1.3, repeat: Infinity, delay: index * 0.04 }}
              />
            );
          })}

        <motion.h2
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="font-hand text-5xl"
          style={{ color: config.color, textShadow: `0 0 20px ${config.glow}` }}
        >
          {config.label}
        </motion.h2>

        <div className="mx-auto my-5 w-fit rounded-full p-5" style={{ boxShadow: `0 0 32px ${config.glow}` }}>
          <StickerSvg size={160} />
        </div>

        <h3 className="font-hand text-4xl text-white">{sticker.name}</h3>
        <p className="mt-2 text-slate-200">{sticker.description}</p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-full px-6 py-2.5 font-semibold text-black"
            style={{ backgroundColor: config.glow }}
          >
            ADD TO COLLECTION
          </button>

          {onSpinAgain && spinsLeft > 0 && (
            <button
              type="button"
              onClick={onSpinAgain}
              className="rounded-full border border-white/20 bg-white/10 px-6 py-2.5 font-semibold text-white"
            >
              SPIN AGAIN ({spinsLeft})
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default RarityReveal;
