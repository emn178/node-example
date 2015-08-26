var webpack = require("webpack");
var bower_dir = __dirname + '/bower_components';

var config = {
  entry: './app/assets/javascripts/application.js',
  resolve: {
    alias: {}
  },
  output: {
    filename: 'public/assets/application.js'
  },
  module: {
    noParse: []
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};

function addVendor (name, path, noParse) {
  config.resolve.alias[name] = path;
  if(noParse) {
    config.module.noParse.push(path);
  }
}

addVendor('jquery', bower_dir + '/jquery/dist/jquery.min.js', true);
addVendor('mypackage', bower_dir + '/mypackage/src/mypackage.js');

module.exports = config;