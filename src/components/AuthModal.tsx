import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

interface AuthModalProps {
  open: boolean;
}

const AuthModal: React.FC<AuthModalProps> = ({ open }) => {
  const { signInWithEmail, signUpWithEmail, signInWithGoogle, loading } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!open) {
    return null;
  }

  const submit = async () => {
    setSubmitting(true);
    setError(null);

    try {
      if (mode === 'signin') {
        await signInWithEmail(email, password);
      } else {
        await signUpWithEmail(email, password, displayName.trim() || 'Player');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed.');
    } finally {
      setSubmitting(false);
    }
  };

  const submitGoogle = async () => {
    setSubmitting(true);
    setError(null);

    try {
      await signInWithGoogle();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Google sign-in failed.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#120a27] p-6 text-white shadow-2xl">
        <div className="mb-6 flex rounded-full bg-white/10 p-1 text-sm font-semibold">
          <button
            type="button"
            className={`flex-1 rounded-full px-4 py-2 ${mode === 'signin' ? 'bg-violet-500' : ''}`}
            onClick={() => setMode('signin')}
          >
            Sign In
          </button>
          <button
            type="button"
            className={`flex-1 rounded-full px-4 py-2 ${mode === 'signup' ? 'bg-violet-500' : ''}`}
            onClick={() => setMode('signup')}
          >
            Sign Up
          </button>
        </div>

        <div className="space-y-3">
          {mode === 'signup' && (
            <input
              value={displayName}
              onChange={(event) => setDisplayName(event.target.value)}
              placeholder="Display name"
              className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2.5"
            />
          )}
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2.5"
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-2.5"
          />
        </div>

        {error && <p className="mt-3 rounded-xl bg-red-500/15 p-2 text-sm text-red-200">{error}</p>}

        <button
          type="button"
          onClick={submit}
          disabled={submitting || loading}
          className="mt-4 w-full rounded-full bg-violet-500 px-4 py-2.5 font-semibold disabled:opacity-60"
        >
          {submitting ? 'Loading...' : mode === 'signin' ? 'Sign In' : 'Create Account'}
        </button>

        <button
          type="button"
          onClick={submitGoogle}
          disabled={submitting || loading}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-2.5 font-semibold disabled:opacity-60"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#EA4335" d="M12 10.2v3.9h5.4c-.2 1.3-1.5 3.9-5.4 3.9-3.2 0-5.9-2.7-5.9-6s2.7-6 5.9-6c1.8 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.4 14.6 2.5 12 2.5 6.8 2.5 2.5 6.8 2.5 12s4.3 9.5 9.5 9.5c5.5 0 9.1-3.8 9.1-9.1 0-.6-.1-1.1-.1-1.5H12Z"/>
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
