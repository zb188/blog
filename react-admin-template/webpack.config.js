const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const analyzeBundle = process.env.ANALYZE === "true";
const isProd = process.env.NODE_ENV === "production";
console.log('===========isProd===================');
console.log("isProd:",isProd);
console.log('analyzeBundle:',analyzeBundle);
console.log('====================================');
module.exports = {
  context: __dirname,
  mode: isProd ? "production" : "development",
  entry: {
    app: "./src/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: isProd ? "[name].[contenthash].js" : "[name].[hash].js"
  },
  devtool: isProd ? "source-map" : "eval-source-map",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-react",'@babel/preset-env','@babel/preset-typescript'],
          plugins: ['@babel/plugin-transform-runtime',['import', { libraryName: "antd", style: true }]],
          cacheDirectory: true,
            // See #6846 for context on why cacheCompression is disabled
            cacheCompression: false,
            compact: isProd,
        }
      },
      {
        test: /\.l[e]ss$/i,
        use: [
          // Creates `style` nodes from JS strings in dev and extract it to
          // another file in production
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
         {
            loader: 'less-loader', // compiles Less to CSS
            options: {
            importLoaders: 2,
            // https://github.com/ant-design/ant-motion/issues/44
            javascriptEnabled: true
          }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    hot: true,
    historyApiFallback: true,
    overlay: true,
    stats: "minimal"
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" }),
    new ForkTsCheckerWebpackPlugin({
      // For the dev server overlay to work
      async: false
    }),
    new CleanWebpackPlugin(),
    isProd ? false : new webpack.HotModuleReplacementPlugin(),
    analyzeBundle ? new BundleAnalyzerPlugin() : false,
    new MiniCssExtractPlugin()
  ].filter(Boolean)
};
