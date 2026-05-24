import { useMemo, useState } from 'react';
import { stickers } from '../data/stickers';
import type { OwnedSticker, Rarity } from '../types';
import StickerCard from './StickerCard';

type Filter = 'all' | Rarity;

const filters: Filter[] = ['all', 'common', 'uncommon', 'rare', 'epic', 'legendary'];

interface StickerBookProps {
  collection: OwnedSticker[];
}

const StickerBook: React.FC<StickerBookProps> = ({ collection }) => {
  const [filter, setFilter] = useState<Filter>('all');

  const ownedIds = useMemo(() => new Set(collection.map((item) => item.stickerId)), [collection]);

  const filtered = useMemo(
    () => stickers.filter((sticker) => (filter === 'all' ? true : sticker.rarity === filter)),
    [filter]
  );

  return (
    <section className="rounded-3xl border border-amber-100/30 bg-[radial-gradient(circle_at_top_left,#f8eecb_0,#f0e0b8_34%,#d8c391_100%)] p-6 text-[#2f1d09] shadow-2xl">
      <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-hand text-5xl">My Sticker Book</h2>
        <p className="rounded-full bg-black/10 px-3 py-1 text-sm font-semibold">
          {ownedIds.size} / {stickers.length}
        </p>
      </header>

      <div className="mb-5 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-full px-3 py-1.5 text-sm font-semibold capitalize ${
              filter === item ? 'bg-[#2f1d09] text-white' : 'bg-white/60 text-[#2f1d09]'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {ownedIds.size === 0 ? (
        <p className="rounded-2xl bg-black/10 p-8 text-center text-lg">No stickers yet — go spin the wheel!</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {filtered.map((sticker) => (
            <StickerCard key={sticker.id} stickerId={sticker.id} ownedSticker={collection.find((item) => item.stickerId === sticker.id)} />
          ))}
        </div>
      )}
    </section>
  );
};

export default StickerBook;
