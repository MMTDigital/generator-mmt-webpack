import webpack from 'webpack'
import StyleLintPlugin from 'stylelint-webpack-plugin'

export default {
  stats: 'none',
  watch: true,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new StyleLintPlugin()
  ]
}
