module.exports = {
 entry: './static/src/App.jsx',
 output: {
   path: '/home/nsrchemie/Documents/f_mern/misf/static/',
   filename: 'app.bundle.js'
 },
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
}};
