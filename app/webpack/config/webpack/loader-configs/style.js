import ExtractTextPlugin from 'extract-text-webpack-plugin'
import autoprefixer from 'autoprefixer'

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
      ident: 'postcss',
      parser: 'postcss-scss',
      plugins: [
        autoprefixer({
          browsers: [
            'last 2 versions',
            'IE >= 9',
            'safari >= 8'
          ]
        })
      ]
    }
  },
  {
    loader: 'sass-loader',
    options: {
      outputStyle: 'expanded'
    }
  },
  {
    loader: 'sass-resources-loader',
    options: {
      resources: [ './src/styles/resources/all.scss' ]
    }
  }
]

export default {
  test: /\.(css|scss)(\?.+)?$/,
  loaders: ExtractTextPlugin.extract({
    use: sassLoaders
  })
}
