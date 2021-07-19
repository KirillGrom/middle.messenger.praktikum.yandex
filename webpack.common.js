const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = MiniCssExtractPlugin.loader;

module.exports = {
	entry: ['./src/index.ts', './src/style/index.scss'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: './js/[name].[contenthash].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'static/index.html'),
			filename: 'index.html',
		}),
		new MiniCssExtractPlugin(
			{filename: './style/main.[contenthash].css'},
		),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: 'ts-loader',
				exclude: ['/node_modules/'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: stylesHandler,
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'sass-loader',
					},
				],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			handlebars: 'handlebars/dist/handlebars.min.js',
		},
	},
};

