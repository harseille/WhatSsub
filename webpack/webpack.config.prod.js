const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  output: {
    chunkFilename: 'js/[name].[chunkhash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'vercel.json' }],
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          name: 'js/react',
          test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          priority: 30,
          enforce: true,
          chunks: 'all',
        },
        firebase: {
          name: 'js/firebase',
          test: /(?<!node_modules.*)[\\/]node_modules[\\/](@firebase)[\\/]/,
          priority: 20,
          enforce: true,
          chunks: 'all',
        },
      },
    },
  },
};
