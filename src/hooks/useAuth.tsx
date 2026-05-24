import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { auth, firebaseEnabled } from '../firebase/config';
import { createUserProfile, getUserProfile } from '../firebase/firestore';
import type { UserProfile } from '../types';
import type { User as FirebaseUser } from 'firebase/auth';

interface AuthContextValue {
  user: UserProfile | null;
  firebaseUser: FirebaseUser | null;
  loading: boolean;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string, displayName: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const localAuthUserKey = 'stickerverse-local-auth-user';
const localAuthAccountsKey = 'stickerverse-local-auth-accounts';

interface LocalAccount {
  uid: string;
  email: string;
  password: string;
  displayName: string;
}

const getLocalAccounts = (): LocalAccount[] => {
  const raw = localStorage.getItem(localAuthAccountsKey);
  return raw ? (JSON.parse(raw) as LocalAccount[]) : [];
};

const setLocalAccounts = (accounts: LocalAccount[]): void => {
  localStorage.setItem(localAuthAccountsKey, JSON.stringify(accounts));
};

const getStoredLocalUid = (): string | null => localStorage.getItem(localAuthUserKey);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  const syncProfile = async (uid: string): Promise<void> => {
    const profile = await getUserProfile(uid);
    setUser(profile);
  };

  useEffect(() => {
    if (firebaseEnabled && auth) {
      return onAuthStateChanged(auth, async (nextUser) => {
        setFirebaseUser(nextUser);
        if (!nextUser) {
          setUser(null);
          setLoading(false);
          return;
        }

        const existing = await getUserProfile(nextUser.uid);
        if (!existing) {
          await createUserProfile(nextUser.uid, nextUser.email ?? '', nextUser.displayName ?? 'Player');
        }

        await syncProfile(nextUser.uid);
        setLoading(false);
      });
    }

    const uid = getStoredLocalUid();
    if (!uid) {
      setLoading(false);
      return;
    }

    syncProfile(uid).finally(() => setLoading(false));
    return undefined;
  }, []);

  const signInWithEmail = async (email: string, password: string): Promise<void> => {
    if (firebaseEnabled && auth) {
      await signInWithEmailAndPassword(auth, email, password);
      return;
    }

    const account = getLocalAccounts().find((candidate) => candidate.email === email && candidate.password === password);
    if (!account) {
      throw new Error('Invalid email or password.');
    }
    localStorage.setItem(localAuthUserKey, account.uid);
    await syncProfile(account.uid);
  };

  const signUpWithEmail = async (email: string, password: string, displayName: string): Promise<void> => {
    if (firebaseEnabled && auth) {
      const credentials = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(credentials.user, { displayName });
      await createUserProfile(credentials.user.uid, email, displayName);
      await syncProfile(credentials.user.uid);
      return;
    }

    const accounts = getLocalAccounts();
    if (accounts.some((account) => account.email === email)) {
      throw new Error('An account with that email already exists.');
    }

    const uid = `local-${crypto.randomUUID()}`;
    accounts.push({ uid, email, password, displayName });
    setLocalAccounts(accounts);
    await createUserProfile(uid, email, displayName);
    localStorage.setItem(localAuthUserKey, uid);
    await syncProfile(uid);
  };

  const signInWithGoogle = async (): Promise<void> => {
    if (firebaseEnabled && auth) {
      const provider = new GoogleAuthProvider();
      const credentials = await signInWithPopup(auth, provider);
      const existing = await getUserProfile(credentials.user.uid);
      if (!existing) {
        await createUserProfile(
          credentials.user.uid,
          credentials.user.email ?? '',
          credentials.user.displayName ?? 'Google Player'
        );
      }
      await syncProfile(credentials.user.uid);
      return;
    }

    const accounts = getLocalAccounts();
    const email = 'local-google@stickerverse.dev';
    const existing = accounts.find((account) => account.email === email);
    if (existing) {
      localStorage.setItem(localAuthUserKey, existing.uid);
      await syncProfile(existing.uid);
      return;
    }

    const uid = `local-google-${crypto.randomUUID()}`;
    accounts.push({ uid, email, password: 'google-oauth', displayName: 'Google Player' });
    setLocalAccounts(accounts);
    await createUserProfile(uid, email, 'Google Player');
    localStorage.setItem(localAuthUserKey, uid);
    await syncProfile(uid);
  };

  const logout = async (): Promise<void> => {
    if (firebaseEnabled && auth) {
      await signOut(auth);
      return;
    }

    localStorage.removeItem(localAuthUserKey);
    setUser(null);
  };

  const refreshUser = async (): Promise<void> => {
    if (firebaseEnabled && auth?.currentUser) {
      await syncProfile(auth.currentUser.uid);
      return;
    }

    const uid = getStoredLocalUid();
    if (uid) {
      await syncProfile(uid);
    }
  };

  const value = useMemo<AuthContextValue>(
    () => ({ user, firebaseUser, loading, signInWithEmail, signUpWithEmail, signInWithGoogle, logout, refreshUser }),
    [user, firebaseUser, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }
  return context;
};
