import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f6f1e9',
        charcoal: '#111111',
        smoke: '#6f6a63',
        sand: '#d9cbbf',
        ink: '#0a0a0a',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(17, 17, 17, 0.07)',
      },
    },
  },
  plugins: [],
};

export default config;
