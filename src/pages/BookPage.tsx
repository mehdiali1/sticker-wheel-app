import StickerBook from '../components/StickerBook';
import { useCollection } from '../hooks/useCollection';

const BookPage: React.FC = () => {
  const { collection } = useCollection();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8">
      <h1 className="mb-4 font-hand text-6xl text-white">Sticker Collection</h1>
      <StickerBook collection={collection} />
    </main>
  );
};

export default BookPage;
