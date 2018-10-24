const webpack = require('webpack'),
      path = require('path'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      StyleLintPlugin = require('stylelint-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:2000/'
  },
  module: {
    rules: [{
        test: /\.html$/, 
        use: [{
            loader: "html-loader",
            options: {
              attrs: [':src']
            }
          }]  
      },
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
        test: /\.(png|jpg|gif|svg|mp4|mov|mp3|ogg|avi|)$/,
        use: [{
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: ''
            }
        }]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({template: 'src/index.html'}),
    new StyleLintPlugin({ 
        syntax: 'scss', 
        fix: true 
      })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./dist/assets/media"),
    compress: true,
    port: 2000,
    stats: 'errors-only',
    open: true
  },
  devtool: 'inline-source-map'
};