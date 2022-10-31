const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  ],

  devServer: {
    // static: { directory: path.resolve(__dirname, 'dist') },
    // host: 'localhost',
    historyApiFallback: true,
    port: 3000,
  },
};
