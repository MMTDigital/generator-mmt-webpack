import path from 'path'
import paths from '../../paths'
import javascript from '../loader-configs/javascript'
import style from '../loader-configs/style'
import font from '../loader-configs/font'
import html from '../loader-configs/html'
import image from '../loader-configs/image'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'
// import DelWebpackPlugin from 'del-webpack-plugin'
// import ManifestPlugin from 'webpack-manifest-plugin'

const root = process.cwd()

export default {
  entry: {
    bundle: path.resolve(root, paths.input.entry)
  },

  output: {
    path: path.resolve(root, paths.outputBuildDir, paths.outputAssetsDir),
    publicPath: `/${paths.outputAssetsDir}/`,
    filename: '[name].js'
  },

  module: {
    rules: [
      javascript,
      style,
      font,
      html,
      image
    ]
  },

  plugins: [
    // new DelWebpackPlugin({ info: false }),
    new FriendlyErrorsWebpackPlugin(),

    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
      ignoreOrder: true
    })

    // new ManifestPlugin({
    //   fileName: 'manifest.json',
    //   basePath: `/${paths.outputAssetsDir}/`,
    //   seed: {
    //     name: 'manifest'
    //   }
    // })

    // jQuery, jake weary.
    //
    // We aim to not use jQuery anymore — it's not really needed. If you need
    // a DOM selector library beyond `document.querySelector`, we recommend
    // min.js (https://github.com/remy/min.js). However, nowadays, working with
    // the native JS methods is usually better. If you absolutely must use jQuery,
    // please discuss first with the lead developer on the team and the architect.
    // Then, you will need to `npm i jquery --save` and un-comment below:

    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery'
    // })
  ]
}
