const webpack = require('webpack'),
      path = require('path'),
      StyleLintPlugin = require('stylelint-webpack-plugin'),
      MiniCssExtractPlugin = require("mini-css-extract-plugin"),
      //CleanWebpackPlugin = require('clean-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin');
      //audFile = require('./src/assets/media/horse.ogg');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:2000/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'src', 'assets/scss')],
        use: [{
          loader: "style-loader",
          options: {
            sourceMap: true
          }
        }, {
          loader: "css-loader",
          options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.html$/, 
        use: [{
          loader: "html-loader",
          options: {
            attrs: [':src']
          }
        }]  
      },
      {
        test: /\.(png|jpg|gif|svg|mp4|mov)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: ''
            }
          }
        ]
      } ,
      {
        test: /\.(ogg|mov)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: ''            
            }
          }
        ]
      } 
    ]
  },
  plugins: [
    // cleaning up only 'dist' folder
    //new CleanWebpackPlugin(['dist']),
    new StyleLintPlugin({ syntax: 'scss' }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
    // This makes it possible for us to safely use env vars on our code
    //new webpack.DefinePlugin({
      //'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
   // })
  ],
  devServer: {
    // static files served from here
    contentBase: path.resolve(__dirname, "./dist/assets/media"),
    compress: true,
    // open app in localhost:2000
    port: 2000,
    stats: 'errors-only',
    open: true
  },

  devtool: 'inline-source-map'

};