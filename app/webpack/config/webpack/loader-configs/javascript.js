export default {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  rules: [
    {
      enforce: 'pre',
      loader: 'standard-loader',
      options: {
        error: false,
        parser: 'babel-eslint',
        snazzy: true
      }
    },
    { use: 'babel-loader' }
  ]
}
