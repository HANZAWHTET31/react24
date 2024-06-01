MINIMUM REACT BUILD

Used commandLines & Steps
==========================

npm i @babel/core @babel/cli @babel/preset-react --save-dev

1.{ create app.js file in src folder and move javascript code from index.html file into src/app.js file }
2.{Write instead <script src="js/app.js"><script/>}
3.{ create .babelrc file and write this code => { "presets": ["@babel/preset-react"] } } => When babel works use the React Preset 
[ Bebel exchange the code from src/app.js into normal javascript code and save into js/app.js ]

npx babel src -d js

npm i webpack webpack-cli babel-loader --save-dev

4.{create webpack.config.js and write the code below which means compile all .js file using babel-loader}
######
      const path = require("path");

      module.exports = {
      entry: "./src/app.js",
      output: {
      path: path.join(__dirname, "/"),
      filename: "js/app.js"
      },
      module: {
      rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader"
            },
            }
      ]
      }
      };
######

npx webpack --mode development --watch
{ --mode development } => it means don't minify the code

npm i webpack-dev-server --save-dev

5.{Update the code from webpack.config.js file}
######
      const path = require("path");

      module.exports = {
      mode: "development",
      entry: "./src/app.js",
      output: {
            path: path.join(__dirname, "/"),
            filename: "js/app.js",
      },
      module: {
            rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                  loader: "babel-loader",
            },
            },
            ],
      },
      devServer: {
            static: {
            directory: path.join(__dirname, "."),
            },
            compress: true,
            port: 9000
      },
      };
######

npx webpack serve --open --hot 

--open => (Open directly in browser)
--hot => (auto update the result not need to refresh)
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #  


[ --save-dev ] => is a npm command line option to insert the installing packages into devDependencies Section of Package Json.

Babel
=======
@babel/core => Main babel
@babel/cli => Babel command line
@babel/preset-react => A preset that can exchange React and Jsx code to normal Javascript code

Webpack
========
webpack
webpack-cli
babel-loader ( use babel from webpack )
webpack-dev-server