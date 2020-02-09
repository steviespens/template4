var path = require('path');
var APP_DIR = path.resolve(__dirname, './project/frontend/src');
var BUILD_DIR = path.resolve(__dirname, './project/frontend/static');

module.exports = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'main.js'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
	  loader: "babel-loader" 
        }
      }
    ]
  }
};
