module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'Helvetica', 'Arial', 'ui-sans-serif', 'system-ui'],
      serif: ['Merriweather', 'ui-serif', 'Georgia'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
