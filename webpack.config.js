var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: [
  	'./src/scss/style.scss',
  	'./src/js/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "source-map",
  resolve: {
        // Добавить расширения '.ts' и '.tsx' в список разрешаемых
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
        rules: [
            // все файлы с расширениями 'ts' или '.tsx' будет обрабатывать `ts-loader'
			{
		        test: /\.js$/,
		        include: path.resolve(__dirname, 'src/js'),
		        use: {
		          loader: 'babel-loader',
		          options: {
		            presets: [
					  "@babel/preset-env"
					]
		          }
		        }
		    },
            { 
            	test: /\.tsx?$/, loader: "ts-loader" 
        	},
        	{
		        test: /\.css$/,
		        use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: "css-loader"
		        })
		    },
		    /*
		    {
		        test: /\.scss$/,
		        use: ExtractTextPlugin.extract({
		          fallback: 'style-loader',
		          use: ['css-loader', 'sass-loader']
		        })
		    }
		    */
		    {
		        test: /\.(sass|scss)$/,
		        include: path.resolve(__dirname, 'src/scss'),
		        use: ExtractTextPlugin.extract({
		          use: [{
		              loader: "css-loader",
		              options: {
		               // sourceMap: true,
		               // minimize: true,
		              //  url: false
		              }
		            },
		            {
		              loader: "sass-loader",
		              options: {
		                sourceMap: true
		              }
		            }
		          ]
		    	})
		    }

        ]
    },
  plugins: [
   // new ExtractTextPlugin("styles.css"),
    new ExtractTextPlugin({
      filename: './css/style.bundle.css',
      allChunks: true,
    }),
  ]

};
