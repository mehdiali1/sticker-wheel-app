import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: 'Spin' },
    { to: '/book', label: 'Collection' },
    { to: '/shop', label: 'Shop' }
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0f0a1e]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-white">
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 60 60" className="h-10 w-10">
            <circle cx="30" cy="30" r="27" fill="#2f1d64" stroke="#facc15" strokeWidth="2.5" />
            <path d="M30 30 L30 5 A25 25 0 0 1 53 30 Z" fill="#a855f7" />
            <path d="M30 30 L53 30 A25 25 0 0 1 43 51 Z" fill="#3b82f6" />
            <path d="M30 30 L43 51 A25 25 0 0 1 17 51 Z" fill="#22c55e" />
            <path d="M30 30 L17 51 A25 25 0 0 1 7 30 Z" fill="#9ca3af" />
            <path d="M30 30 L7 30 A25 25 0 0 1 30 5 Z" fill="#f59e0b" />
            <circle cx="30" cy="30" r="5" fill="#fef08a" />
          </svg>
          <span className="font-hand text-3xl">Stickerverse</span>
        </div>

        <button type="button" className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
          ☰
        </button>

        <div className={`${open ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-2 bg-[#0f0a1e] p-4 md:static md:flex md:w-auto md:flex-row md:items-center md:bg-transparent md:p-0`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `rounded-full px-3 py-1.5 ${isActive ? 'bg-violet-500 text-white' : 'text-slate-300'}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <span className="rounded-full bg-amber-300 px-3 py-1 text-sm font-semibold text-black">{user?.spins ?? 0} spins</span>
          <span className="max-w-[180px] truncate text-sm text-slate-300">{user?.email}</span>
          <button type="button" onClick={logout} className="rounded-full border border-white/20 px-3 py-1 text-sm">
            Sign out
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
