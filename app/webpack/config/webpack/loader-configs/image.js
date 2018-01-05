// If you're in React, un-comment the url-loader for Data URIs for small images :)

export default {
  test: /\.(png|jpg|jpeg|gif|webp)$/,
  rules: [
    // {
    //   use: {
    //     loader: 'url-loader', // === DataURI
    //     options: {
    //       limit: 8192, // Will use img-loader over this limit
    //       publicPath: '/assets/',
    //       name: 'images/[name].[ext]'
    //     }
    //   }
    // },
    {
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/assets/',
          name: 'images/[name].[ext]'
        }
      }
    },
    {
      use: {
        loader: 'img-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 85
          }
        }
      }
    }
  ]
}
