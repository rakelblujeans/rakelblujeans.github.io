/* eslint-env node */
module.exports = {
  plugins: [
    require('postcss-media-variables')(),
    require('postcss-custom-media')(),
    require('postcss-calc')(),
    require('postcss-color-function')(),
    require('postcss-nested')(),
    require('autoprefixer')({browsers: ['last 2 versions'], grid: false}),
  ]
};