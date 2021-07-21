const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),
  resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    publicPath: '',
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/public/index.html'),
    }),
  ],
};
