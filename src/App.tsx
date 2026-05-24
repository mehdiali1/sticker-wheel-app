import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, Routes, Route } from 'react-router-dom';
import AuthModal from './components/AuthModal';
import Navbar from './components/Navbar';
import { useAuth } from './hooks/useAuth';
import BookPage from './pages/BookPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="grid min-h-screen place-items-center text-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#0f0a1e]">
      <Navbar />
      <AnimatedRoutes />
      <AuthModal open={!user} />
    </div>
  );
};

export default App;
