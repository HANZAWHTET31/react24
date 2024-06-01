MINIMUM REACT BUILD

Used commandLines & Steps
==========================
npm i @babel/core @babel/cli @babel/preset-react --save-dev

{ create app.js file in src folder and move javascript code from index.html file into src/app.js file }
{Write instead <script src="js/app.js"><script/>}
{ create .babelrc file and write this code => { "presets": ["@babel/preset-react"] } } => When babel works use the React Preset 

npx babel src -d js




[ --save-dev ] => is a npm command line option to insert the installing packages into devDependencies Section of Package Json.

Babel
=======
@babel/core => Main babel
@babel/cli => Babel command line
@babel/preset-react => A preset that can exchange React and Jsx code to normal Javascript code


Web socket
