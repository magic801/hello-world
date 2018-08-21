const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const PrepackWebpackPlugin = require('prepack-webpack-plugin').default

module.exports = {
	devtool: '#source-map',
	entry: './src/main.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname, './public/index.html')
		}),
		new PrepackWebpackPlugin({})
	],
	module: {
		rules: [{
			test: /\.js$/,
			exclude: path.resolve(__dirname, 'node_modules'),
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['latest']
				}
			}
		}]
	}
}