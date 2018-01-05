const path = require('path')

const js = {
  test: /\.svg$/,
  include: [
    path.resolve(__dirname, '../../../', 'src/assets/images'),
    path.resolve(__dirname, '../../../', 'src/assets/icons')
  ],
  rules: [
    { use: 'raw-loader' },
    { use: 'img-loader' }
  ]
}

const scss = {
  test: /\.svg$/,
  include: [
    path.resolve(__dirname, '../../../', 'src/assets/images'),
    path.resolve(__dirname, '../../../', 'src/assets/icons')
  ],
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
