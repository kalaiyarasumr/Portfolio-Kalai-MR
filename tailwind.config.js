/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkNavy: {
          DEFAULT: '#020617', // slate-950
          lighter: '#0b1329',
          light: '#1e293b',  // slate-800
        },
        cyanCustom: {
          DEFAULT: '#06b6d4', // cyan-500
          light: '#67e8f9',  // cyan-300
          dark: '#0891b2',   // cyan-600
        },
        purpleCustom: {
          DEFAULT: '#a855f7', // purple-500
          light: '#d8b4fe',  // purple-300
          dark: '#7e22ce',   // purple-700
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass-cyan': '0 8px 32px 0 rgba(6, 182, 212, 0.15)',
        'glass-purple': '0 8px 32px 0 rgba(168, 85, 247, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
