/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hand: ['Caveat', 'cursive']
      },
      colors: {
        rarity: {
          common: '#9ca3af',
          uncommon: '#22c55e',
          rare: '#3b82f6',
          epic: '#a855f7',
          legendary: '#f59e0b'
        }
      },
      keyframes: {
        glow: {
          '0%,100%': { opacity: '0.5' },
          '50%': { opacity: '1' }
        }
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
