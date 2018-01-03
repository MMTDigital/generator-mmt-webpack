const path = require('path')

const js = {
  test: /\.svg$/,
  include: path.resolve(__dirname, '../../../', 'src/assets/images'),
  rules: [
    { use: 'raw-loader' },
    { use: 'img-loader' }
  ]
}

const scss = {
  test: /\.svg$/,
  include: path.resolve(__dirname, '../../../', 'src/assets/images'),
  issuer: /\.scss$/,
  rules: [
    { use: 'url-loader' },
    { use: 'img-loader' }
  ]
}

module.exports = {
  js,
  scss
}
