import { useCallback, useEffect, useState } from 'react';
import { useAuth } from './useAuth';
import { saveCollection } from '../firebase/firestore';
import type { OwnedSticker } from '../types';

const guestCollectionKey = 'stickerverse-guest-collection';

const getGuestCollection = (): OwnedSticker[] => {
  const raw = localStorage.getItem(guestCollectionKey);
  return raw ? (JSON.parse(raw) as OwnedSticker[]) : [];
};

export const useCollection = () => {
  const { user, refreshUser } = useAuth();
  const [collection, setCollection] = useState<OwnedSticker[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setCollection(user.collection);
      setLoading(false);
      return;
    }

    setCollection(getGuestCollection());
    setLoading(false);
  }, [user]);

  const addSticker = useCallback(
    async (stickerId: string): Promise<void> => {
      const nextCollection = [...collection];
      const existing = nextCollection.find((item) => item.stickerId === stickerId);

      if (existing) {
        existing.count += 1;
      } else {
        nextCollection.push({ stickerId, count: 1, firstObtained: new Date().toISOString() });
      }

      setCollection(nextCollection);

      if (user) {
        await saveCollection(user.uid, nextCollection);
        await refreshUser();
      } else {
        localStorage.setItem(guestCollectionKey, JSON.stringify(nextCollection));
      }
    },
    [collection, refreshUser, user]
  );

  return { collection, addSticker, loading };
};
