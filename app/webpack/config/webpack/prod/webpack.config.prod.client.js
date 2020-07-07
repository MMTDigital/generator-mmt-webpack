import webpack from 'webpack'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

export default {
  stats: 'verbose',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        }
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      sourceMap: false,
      terserOptions: {
        compress: {
          warnings: false
        },
        mangle: true,
        output: {
          comments: false
        }
      }
    })]
  },
}
