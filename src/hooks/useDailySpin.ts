import { useMemo } from 'react';
import { claimDailySpin } from '../firebase/firestore';
import { useAuth } from './useAuth';

export const useDailySpin = () => {
  const { user, refreshUser } = useAuth();

  const canClaimDaily = useMemo(() => {
    if (!user) {
      return false;
    }
    const today = new Date().toISOString().slice(0, 10);
    return user.lastDailyClaim !== today;
  }, [user]);

  const claimDaily = async (): Promise<void> => {
    if (!user || !canClaimDaily) {
      return;
    }

    await claimDailySpin(user.uid);
    await refreshUser();
  };

  return { canClaimDaily, claimDaily };
};
