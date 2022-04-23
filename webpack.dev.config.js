const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require("eslint-webpack-plugin");
const Dotenv = require('dotenv-webpack');

const config = {
  mode: "development",
  output: {
    publicPath: "/",
  },
  entry: path.resolve(__dirname, 'src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['base64-inline-loader'],
      },
      {
        test: /\.svg$/,
        use: [{
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                { name: 'removeViewBox', active: false }
              ]
            }
          }
        }, 'url-loader'],
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        use: {
          loader: 'url-loader',
        },
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      assets: path.resolve(__dirname, 'src/assets/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      models: path.resolve(__dirname, 'src/models/'),
      hooks: path.resolve(__dirname, 'src/hooks/'),
      config: path.resolve(__dirname, 'src/config/'),
      context: path.resolve(__dirname, 'src/context/'),
      components: path.resolve(__dirname, 'src/components/'),
      provider: path.resolve(__dirname, 'src/provider/'),
      structure: path.resolve(__dirname, 'src/structure/'),
    },
    fallback: {
      fs: false,
      path: false,
      process: false
    },
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new HotModuleReplacementPlugin({
      hot: true,
    }),
    new ForkTsCheckerWebpackPlugin({
        async: false
    }),
    new ESLintPlugin({
        fix: true,
        emitError: true,
        emitWarning: false,
        extensions: ["js", "jsx", "ts", "tsx"],
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 3001,
    open: false,
    hot: true
  },
};

module.exports = config;