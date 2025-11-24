/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'app-bg': '#0A0A0D',
        'text-main': '#FEFEFE',
        'menu-bg': '#0F1012',
        'menu-active': '#1D1D1E',
        'text-sub': '#D9D9D9',
        'star-inactive': '#D9D9D9',
        'star-active': '#D46211',
        'input-bg': '#1E1E1E',
        'input-text': '#8E8E93',
        'card-border': '#525050',
        'date-text': '#6B6969',
        'button-bg': '#1F1F21',
      },
      fontFamily: {
        preR: ['preR'],
        preB: ['preB'],
        dis: ['dis'],
      },
      fontSize: {
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        36: '36px',
      },
    },
  },
  plugins: [],
};
