const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const env = process.env.NODE_ENV
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const robotsTxtOptions = {};

const urlPath = process.env.REACT_APP_URL_PATH || ''
const proxyUrl = `${urlPath}/api/**`

const segmentKey = process.env.SEGMENT_KEY

module.exports = {
  resolve: {
    modules: [ 'node_modules', 'components', 'src', 'styles', 'config', 'assets', 'data' ],
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      react: path.resolve('./node_modules/react')
    }
  },

  mode: process.env.NODE_ENV,

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    open: true,
    historyApiFallback: true,
    port: 7000,
    proxy: { [proxyUrl]: {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
        logLevel: 'debug'
      }
    },
    overlay: {
      warnings: true,
      errors: true
    }
  },

  entry: {
    main: './src/index.tsx'
  },

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: `${urlPath}/`
  },

  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: { loader: 'awesome-typescript-loader' }
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.scss$/,
        use: [
        'style-loader',
        'postcss-loader',

        {
          loader: 'sass-loader',

          options: {
            data: "@import '~sass/global';",
            includePaths: [ '/src/sass/_global.scss' ],
            sourceMap: env !== 'production',
            sourceMapContents: false
          }
        }]
      },
      {
        test: /\.(woff(2)?|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [ 'url-loader?limit=100000' ]
      },
      {
        test: /\.svg|jpg|jpeg|png|gif|pdf?$/,
        use: [ 'file-loader' ]
      }
    ]
  },

  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      title: 'React Starter',
      filename: 'index.html',
      template: './index.template.html',
      segmentKey: segmentKey,
      'base': { 'href': `${urlPath}/` }
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' }
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new RobotstxtPlugin(robotsTxtOptions),
    new webpack.DefinePlugin({ 'process.env.REACT_APP_URL_PATH': JSON.stringify(urlPath) })
  ]
}
