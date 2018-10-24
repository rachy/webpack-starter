const webpack = require('webpack'),
      path = require('path'),
      MiniCssExtractPlugin = require("mini-css-extract-plugin"),
      HtmlWebpackPlugin = require('html-webpack-plugin');
      OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader'},
            { loader: 'sass-loader'}
        ],
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
        test: /\.(png|jpg|gif|svg|mp4|mov|mp3|ogg|avi|)$/,
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
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
  ]
};