MY REACT APP WITH WEBPACK 4.0
## Install React JS
•	npm install -g create-react-app
## Start a new React project
•	npx create-react-app project
## Add babel rc to React JS
•	npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
•	Create a new .babelrc (just like .htaccess)
•	Add the following line

```{"presets": ["@babel/preset-env", "@babel/preset-react"]}```

## Add Webpack 4.0
•	`npm i webpack --save-dev`
•	npm i webpack-cli --save-dev
•	npm i --save-dev html-webpack-plugin
•	npm install --save-dev mini-css-extract-plugin
•	npm i -D copy-webpack-plugin
•	npm install url-loader --save-dev
•	npm i html-webpack-plugin html-loader --save-dev
•	npm install --save-dev css-loader
•	Create a webpack.config.js file and add the following lines

```
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/' // For production - base directory folder name
  },
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    port: 8080, // change to 80 for production
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      { 
        test: /\.(cur|jpg|jpeg|gif|png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=50000&name=fonts/[name].[ext]" // For production - url-loader?limit=50000&name=/fonts/[name].[ext]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html", // for compiling html file in src folder
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      // for compiling directories in src folder
      {from:'src/images',to:'images'},
      {from:'src/assets',to:'assets'} ,
      {from:'src/media',to:'media'} 
    ]),
  ]
};
```
•	Next, go to package.json in your React JS and edit
```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
  ```

To
```
"scripts": {
    "start": "webpack-dev-server --open --mode development",
    "build": "webpack --mode production"
  },
  ```

•	In your production file, create an .htaccess file and add the following lines.
```
# Map all non-existing URLs to be processed by index.html,
# so any URL that doesn't point to a JS file, CSS file, etc etc...
# goes through my React app.

<IfModule mod_rewrite.c> 
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !=/favicon.ico
RewriteRule ^ index.html [L]
</IfModule>
```
•	Copy the index.html, favicon.ico, manifest.json file and all your directory folders into the src folder
•	Then you can delete the public folder
•	Inside the index.html file remove any %PUBLIC_FOLDER% in the link tags
•	Then run “npm start”
•	To build “npm run build”
