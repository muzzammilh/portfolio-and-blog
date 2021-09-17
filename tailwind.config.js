module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        c1: {
          '50': '#fcfcfd',
          '100': '#fcfcfd',
          '200': '#d8e0e9',
          '300': '#b0c0d3',
          '400': '#7c96b6',
          '500': '#35485f',
          '600': '#394d66',
          '700': '#3c526c',
          '800': '#405773',
          '900': '#445c79'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
