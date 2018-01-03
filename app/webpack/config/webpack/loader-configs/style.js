import ExtractTextPlugin from 'extract-text-webpack-plugin'

const sassLoaders = [
  {
    loader: 'css-loader',
    options: {
      modules: false, // Switch this on for CSS Modules (https://github.com/css-modules/css-modules)
      localIdentName: '[local]--[hash:base64:5]',
      sourceMap: true
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      parser: 'postcss-scss',
      config: {
        path: '../../postcss.config.js'
      }
    }
  },
  {
    loader: 'sass-loader',
    options: {
      outputStyle: 'expanded'
    }
  }
]

export default {
  test: /\.(css|scss)(\?.+)?$/,
  loaders: ExtractTextPlugin.extract({
    use: sassLoaders
  })
}
