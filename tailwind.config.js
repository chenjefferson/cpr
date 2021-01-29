module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#133e77',
        primaryDark: '#132e53',
        secondary: '#d5f0f9',
        secondaryDark: '#a1e3f9',
        tertiary: '#6fcaeb',
        tertiaryDark: '#35b5e3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
