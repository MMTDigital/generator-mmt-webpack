module.exports = {
  test: /\.md$/,
  use: [
    { loader: 'html-loader' },
    { loader: 'markdown-loader' }
  ]
}
