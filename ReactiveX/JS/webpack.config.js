module.exports = {
	entry: './src/app.js',
	output: {
		path: './dist',
		filename:'app.bundle.js'
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
			rx: 'rx/dist/rx.all.js'
		}	
	},
	module: {
		loaders: [{
			exclude: '/node_modules/',
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	}
}