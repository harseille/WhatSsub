const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: {
    'js/app': path.join(__dirname, '..', 'src', 'index.tsx'),
  },
  output: {
    clean: true,
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
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
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@assets': path.resolve(__dirname, '..', 'src', 'assets'),
      '@api': path.resolve(__dirname, '..', 'src', 'api'),
      '@components': path.resolve(__dirname, '..', 'src', 'components'),
      '@constants': path.resolve(__dirname, '..', 'src', 'constants'),
      '@data': path.resolve(__dirname, '..', 'src', 'data'),
      '@layouts': path.resolve(__dirname, '..', 'src', 'layouts'),
      '@pages': path.resolve(__dirname, '..', 'src', 'pages'),
      '@state': path.resolve(__dirname, '..', 'src', 'state'),
      '@styles': path.resolve(__dirname, '..', 'src', 'styles'),
      '@services': path.resolve(__dirname, '..', 'src', 'services'),
      '@typings': path.resolve(__dirname, '..', 'src', 'typings'),
      '@utils': path.resolve(__dirname, '..', 'src', 'utils'),
      '@hooks': path.resolve(__dirname, '..', 'src', 'hooks'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'public', 'index.html'),
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
};
