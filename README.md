# Webpack 4 Boilerplate for beginners
A basic webpack 4 boilerplate for beginners to start with any JS/ES6 based project. 
<br>
## Guide
This basic boilerplate is the final output of this comprehensive write up on Medium. I recommend to read this article to know the insight of how you can configure webpack from scratch.
[Webpack 4 quickstarter: Configure webpack from scratch](https://medium.com/@nirjhor123/webpack-3-quickstarter-configure-webpack-from-scratch-30a6c394038a)
<br>
1. Navigate to the appropriate folder. This example uses the a folder on the desktop called "class projects" folder. NOTE: Start from your home directory "~".

```
$ cd "desktop/class projects"
```

2. Clone the webpack-starter into your "class projects" folder with the following command:

```
$ git clone https://github.com/SJCCodeTalk/webpack-starter.git
```
3. Change the name of webpack-starter to reflect the name of your project

4. Change your directory to the project folder. 

```
$ cd new-project
```

5. Install dependencies

```
$ npm install
```


6.  Develop locally with webpack-dev-server

```
$ npm run dev
```

## Bundled Output
In your browser, navigate to: [http://localhost:2000/](http://localhost:2000/)

### For bundled output

```
$ npm run build
```

### To restart your project after leaving it

1. Navigate to your project folder in terminal

2. Run Dev. 

```
$ npm run dev
```

Note: it is safe to move from dev to build and build to dev. Just run [control] "c" to cancel dev processes if in the dev version.
 
## Loaders and Plugins used in this boilerplate

### Loaders
* babel-loader
* html-loader
* sass-loader
* css-loader
* style-loader
* file-loader

### Plugins
* clean-webpack-plugin
* mini-css-extract-plugin
* html-webpack-plugin

