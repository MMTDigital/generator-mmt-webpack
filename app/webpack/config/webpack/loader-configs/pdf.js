module.exports = {
  test: /\.pdf?$/,
  loader: 'file-loader',
  options: {
    publicPath: '/assets/',
    name: 'downloads/[name].pdf'
  }
}
