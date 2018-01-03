const merge = require('webpack-merge')

const client = {
  test: /\.(webm|mp4)$/,
  rules: [ 
    {
      use: {
        loader: 'file', // === DataURL
        options: {
          publicPath: '/assets/',
          name: 'video/[name].[ext]?[hash]'
        }
      }
    } 
  ]
}

module.exports = {
  client
}
