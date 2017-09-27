var path = require('path')
var webpack = require('webpack')
var yeticss = require('yeticss')

module.exports = {
  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'cheap-source-map',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true, // prevent error generating source map in some condition
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    resolve: {
      extensions: ['', '.js', '.scss']
    },
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'scss-loader']
      }
    ]
  }
}
