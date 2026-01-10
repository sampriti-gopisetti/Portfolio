/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e6f2ff',
          200: '#cfe7ff',
          300: '#b7dcff',
          400: '#a1d0ff',
          500: '#8cc4ff',
          600: '#74b3f5',
          700: '#5a99db',
          800: '#4a7fb6',
          900: '#406b97'
        },
        accent: '#a5d8ff',
        mint: {
          50: '#effef6',
          100: '#d9fde9',
          200: '#b9fbd6',
          300: '#93f7c0',
          400: '#74e9a9',
          500: '#54d191',
        },
        sun: {
          50: '#fffbea',
          100: '#fff3c4',
          200: '#fce588',
          300: '#fadb5f',
          400: '#f7c948',
          500: '#f0b429',
        },
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
        },
        ink: '#4B352A',
        soft: '#94A3B8',
        glass: 'rgba(255,255,255,0.08)'
      },
      boxShadow: {
        glass: '0 10px 30px rgba(0,0,0,0.15)'
      },
      borderRadius: {
        xl2: '1.25rem'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(1200px 600px at 12% 18%, rgba(147,197,253,0.28), transparent 60%), radial-gradient(900px 450px at 85% 5%, rgba(186,230,201,0.26), transparent 60%), radial-gradient(1100px 550px at 50% 100%, rgba(250,224,120,0.22), transparent 60%), radial-gradient(900px 450px at 5% 80%, rgba(253,164,175,0.22), transparent 60%)'
      }
    }
  },
  plugins: [],
};