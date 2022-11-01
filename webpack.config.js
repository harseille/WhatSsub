const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index.tsx'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devtool: 'eval-source-map',

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@layouts': path.resolve(__dirname, 'src', 'layouts'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      // '@hooks': path.resolve(__dirname, 'hooks'),
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
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin(),
  ],

  devServer: {
    hot: true,
    // static: { directory: path.resolve(__dirname, 'dist') },
    // host: 'localhost',
    historyApiFallback: true,
    port: 3000,
  },
};
