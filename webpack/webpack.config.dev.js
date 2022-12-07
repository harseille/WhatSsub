const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    compress: true,
    hot: true,
    historyApiFallback: true,
    port: 3000,
  },
  plugins: [new Dotenv(), new BundleAnalyzerPlugin()],
  // plugins: [new Dotenv()],
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
