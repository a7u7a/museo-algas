module.exports = {
  purge: [],
  // corePlugins: {
  //   preflight: false,
  // },

  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'base': ['0.9rem', '1.6rem'],
      'lg': ['1.3rem', '1.6rem'],
      'xl': ['2.0rem', '2.6rem'],
      '2xl': ['2.5rem', '2.8rem'],
    },
    screens: { 'md': "1200px" },
    extend: {

      colors: { 'mdla-bg': '#fafafa' },
      fontFamily: {
        serif: ['Libre\\ Baskerville']
        // serif: ['Cormorant\\ Garamond']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}