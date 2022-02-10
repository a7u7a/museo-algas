module.exports = {
  purge: [],
  // corePlugins: {
  //   preflight: false,
  // },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: { 'md': "1200px" },
    extend: {
      colors: { 'mdla-bg': '#fafafa' },
      fontFamily: {
        serif: ['Libre\\ Baskerville']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}