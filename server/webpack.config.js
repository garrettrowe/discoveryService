const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
var nodeExternals = require('webpack-node-externals');

// const nodeModules = {}

// fs.readdirSync('node_modules').filter(x => ['.bin'].indexOf(x) === -1)
// .forEach(mod => nodeModules[mod] = `commonjs ${mod}` )

module.exports = {
  externals: nodeExternals(),
  name: 'server',
  target: 'node',
  devtool: "inline-source-map",
  resolve: {
    modules: [ 'node_modules', 'api', 'config', 'controllers' ],
    extensions: ['.ts', '.js']
  },

  entry: {
    main: path.join(__dirname, 'src/server.ts')
  },
  module: {
    rules: [
      { 
        test: /\.(t|j)sx?$/, 
        exclude: /node_modules/, 
        use: { loader: 'awesome-typescript-loader' } 
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: false })
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: "server.bundle.js"
  }
}