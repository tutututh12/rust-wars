/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sw-blue': {
          light: '#4A90E2',
          DEFAULT: '#2C5282',
          dark: '#1A365D',
        },
        'sw-accent': {
          light: '#FFE81F',
          DEFAULT: '#FFD700',
          dark: '#B8860B',
        },
      },
      fontFamily: {
        'star-wars': ['var(--font-star-wars)', 'sans-serif'],
        'sci-fi': ['var(--font-orbitron)', 'sans-serif'],
      },
      backgroundImage: {
        'stars': "url('/images/stars-bg.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
} 