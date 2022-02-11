module.exports = {
  purge: [],
  // corePlugins: {
  //   preflight: false,
  // },

  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'base': ['0.9rem', '1.6rem'],
      'lg': ['1.5rem', '2.4rem'],
      'xl': ['2.0rem', '2.6rem'],
      '2xl': ['2.5rem', '2.8rem'],
    },

    extend: {
      screens: { 'mds': "1200px" },
      colors: { 'mdla-bg': '#fafafa' },
      fontFamily: {
        serif: ['Libre\\ Baskerville'],
        sans: ['Work\\ Sans']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}