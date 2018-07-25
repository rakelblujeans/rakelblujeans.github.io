/* eslint-env node */
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production', //process.env.WEBPACK_SERVE ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src')],
        options: {presets: [['env', {targets: {browsers: ['last 2 versions']}}]]},
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        include: path.join(__dirname, 'images'),
        use: [{
          loader: 'file-loader',
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ],

  resolve: {
    extensions: ['.css', '.js', '.png'],
  },
};