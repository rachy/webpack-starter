const webpack = require('webpack'),
      path = require('path'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      MiniCssExtractPlugin = require("mini-css-extract-plugin"),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,

            { loader: 'css-loader'},
            { loader: 'sass-loader', options: { sourceMap: true } }
        ],
      },
      {
        test: /\.html$/, 
        use: [{
          loader: "html-loader"
        }]  
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'media/'
             
            }
          }
        ]
      }
    ],
  },
  plugins: [
    // cleaning up only 'dist' folder
    //new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
    // This makes it possible for us to safely use env vars on our code
    //new webpack.DefinePlugin({
      //'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    //})
  ]
};