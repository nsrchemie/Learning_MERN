const webpack = require('webpack');
module.exports = {
 entry: {
  app:'./static/src/App.jsx',
  vendor: ['react','react-dom','whatwg-fetch','babel-polyfill'],
},
 output: {
   path: '/home/nsrchemie/Documents/f_mern/misf/static/',
   filename: 'app.bundle.js'
 },
 plugins: [
  new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename:'vendor.bundle.js'})
],
 module: {
 loaders: [
  {
  test: /\.jsx$/,
  loader:'babel-loader',
  query: {
    presets: ['react','es2015']
  }
 },
]
},
devServer: {
  port: 8000,
  contentBase: 'static',
  proxy: {
    '/api/*': {
      target: 'http://localhost:3000'
    }
  }
}
};
