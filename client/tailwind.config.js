module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '5': '4fr 5fr 5fr 5fr 6fr',
      },
      colors: {
        'dnd-purple': 'rgb(112, 76, 217)'
      },
      backgroundImage: {
        'i-ritual': "url(https://www.dndbeyond.com/content/1-0-1862-0/skins/waterdeep/images/icons/core_mechanics/ritual.svg)",
        'i-concentration': "url(https://www.dndbeyond.com/content/1-0-1869-0/skins/waterdeep/images/icons/core_mechanics/concentration.svg)"
      },
      boxShadow: {
        'sb-sm': '0 0px 8px 0 rgba(0, 0, 0, 0.2)',
        'sb-md': '0 0px 16px 0 rgba(0,0,0,0.2);'
      }
    },
  },
  plugins: [],
}
