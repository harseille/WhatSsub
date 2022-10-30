const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'images/[hash][ext][query]',
  },

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
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
              '@babel/preset-react',
            ],
          },
        },
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: 'asset/resource',
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
    port: 3000,
  },
};
