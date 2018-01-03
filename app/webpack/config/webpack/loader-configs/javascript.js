export default {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  rules: [
    { use: 'babel-loader' }
  ]
}
