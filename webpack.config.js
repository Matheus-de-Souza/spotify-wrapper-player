const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, './src'),
	entry: {
		app: './main.js',
	},
  output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './example'),
    // libraryTarget: 'umd',
    // library: 'SpotifyWrapper',
	},
	devServer: {
		contentBase: path.resolve(__dirname, './example'),
	},
  devtool: 'source-map',
  module: {
		rules: [
			{ test: /\.js$/,
				exclude: [/node_modules/],
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
		]
  },
}