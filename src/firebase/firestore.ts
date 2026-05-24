import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import type { OwnedSticker, UserProfile } from '../types';
import { db } from './config';

const profileKey = (uid: string) => `stickerverse-profile-${uid}`;

const getLocalProfile = (uid: string): UserProfile | null => {
  const raw = localStorage.getItem(profileKey(uid));
  return raw ? (JSON.parse(raw) as UserProfile) : null;
};

const saveLocalProfile = (profile: UserProfile): void => {
  localStorage.setItem(profileKey(profile.uid), JSON.stringify(profile));
};

export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  if (!db) {
    return getLocalProfile(uid);
  }

  const snapshot = await getDoc(doc(db, 'users', uid));
  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data() as UserProfile;
};

export const createUserProfile = async (uid: string, email: string, displayName: string): Promise<void> => {
  const profile: UserProfile = {
    uid,
    email,
    displayName,
    spins: 3,
    lastDailyClaim: null,
    collection: [],
    totalSpins: 0
  };

  if (!db) {
    saveLocalProfile(profile);
    return;
  }

  await setDoc(doc(db, 'users', uid), profile, { merge: true });
};

export const updateSpins = async (uid: string, spins: number): Promise<void> => {
  if (!db) {
    const existing = getLocalProfile(uid);
    if (!existing) return;
    saveLocalProfile({ ...existing, spins });
    return;
  }

  await updateDoc(doc(db, 'users', uid), { spins });
};

export const claimDailySpin = async (uid: string): Promise<void> => {
  const today = new Date().toISOString().slice(0, 10);

  if (!db) {
    const existing = getLocalProfile(uid);
    if (!existing) return;
    saveLocalProfile({ ...existing, spins: existing.spins + 1, totalSpins: existing.totalSpins + 1, lastDailyClaim: today });
    return;
  }

  const profile = await getUserProfile(uid);
  if (!profile) return;
  await updateDoc(doc(db, 'users', uid), {
    spins: profile.spins + 1,
    totalSpins: profile.totalSpins + 1,
    lastDailyClaim: today
  });
};

export const addSpinsAfterPurchase = async (uid: string, amount: number): Promise<void> => {
  if (!db) {
    const existing = getLocalProfile(uid);
    if (!existing) return;
    saveLocalProfile({ ...existing, spins: existing.spins + amount, totalSpins: existing.totalSpins + amount });
    return;
  }

  const profile = await getUserProfile(uid);
  if (!profile) return;
  await updateDoc(doc(db, 'users', uid), {
    spins: profile.spins + amount,
    totalSpins: profile.totalSpins + amount
  });
};

export const saveCollection = async (uid: string, collection: OwnedSticker[]): Promise<void> => {
  if (!db) {
    const existing = getLocalProfile(uid);
    if (!existing) return;
    saveLocalProfile({ ...existing, collection });
    return;
  }

  await updateDoc(doc(db, 'users', uid), { collection });
};
