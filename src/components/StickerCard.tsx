import { motion } from 'framer-motion';
import { rarityConfig, stickers } from '../data/stickers';
import type { OwnedSticker } from '../types';
import { StickerSvgMap } from './StickerSvgs';

interface StickerCardProps {
  stickerId: string;
  ownedSticker?: OwnedSticker;
}

const StickerCard: React.FC<StickerCardProps> = ({ stickerId, ownedSticker }) => {
  const sticker = stickers.find((item) => item.id === stickerId);
  if (!sticker) {
    return null;
  }

  const owned = Boolean(ownedSticker);
  const config = rarityConfig[sticker.rarity];
  const Svg = StickerSvgMap[sticker.svgComponent];

  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      className="relative overflow-hidden rounded-2xl border bg-[linear-gradient(160deg,#fff8e6_0%,#efe0bd_100%)] p-4 text-[#2f1d09] shadow-lg"
      style={{ borderColor: config.color, boxShadow: `0 0 12px ${config.glow}` }}
    >
      <div className="flex justify-center">
        <Svg size={80} />
      </div>

      {ownedSticker && (
        <span className="absolute right-2 top-2 rounded-full bg-black/75 px-2 py-0.5 text-xs font-semibold text-white">
          x{ownedSticker.count}
        </span>
      )}

      <h4 className="mt-2 text-center font-hand text-2xl">{owned ? sticker.name : '???'}</h4>

      <span
        className="absolute bottom-2 right-2 rounded-full px-2 py-0.5 text-xs font-semibold text-white"
        style={{ backgroundColor: config.color }}
      >
        💎 {config.label}
      </span>

      {!owned && (
        <div className="absolute inset-0 grid place-items-center bg-[#0f0a1ed9] text-3xl text-white/90">
          🔒
        </div>
      )}
    </motion.article>
  );
};

export default StickerCard;
