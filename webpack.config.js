const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index.tsx'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js',
    publicPath: '/',
    clean: true,
  },

  devtool: 'eval-source-map',

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@api': path.resolve(__dirname, 'src', 'api'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@constants': path.resolve(__dirname, 'src', 'constants'),
      '@data': path.resolve(__dirname, 'src', 'data'),
      '@layouts': path.resolve(__dirname, 'src', 'layouts'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@state': path.resolve(__dirname, 'src', 'state'),
      '@styles': path.resolve(__dirname, 'src', 'styles'),
      '@services': path.resolve(__dirname, 'src', 'services'),
      '@typings': path.resolve(__dirname, 'src', 'typings'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
      '@hooks': path.resolve(__dirname, 'src', 'hooks'),
      // '@state': path.resolve(__dirname, 'src', 'state'),
      // '@utils': path.resolve(__dirname, 'utils'),
      // '@typings': path.resolve(__dirname, 'typings'),
    },
  },

  module: {
    rules: [
      {
        test: /\.?(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      browsers: ['>= 1% in KR'],
                    },
                  },
                ],
              ],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
      {
        test: /\.mp3$/,
        type: 'asset/resource',
        generator: {
          filename: 'music/[hash][ext][query]',
        },
      },
    ],
  },

  plugins: [
    // new webpack.ProvidePlugin({
    //   React: 'react',
    // }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new Dotenv(),

    // new Dotenv({
    //   systemvars: true,
    // }),
    // new RefreshWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'js/vendor',
          chunks: 'all',
        },
      },
    },
  },
  devServer: {
    hot: true,
    // static: { directory: path.resolve(__dirname, 'dist') },
    // host: 'localhost',
    historyApiFallback: true,
    port: 3000,
  },
};
