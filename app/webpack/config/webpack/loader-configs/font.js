import path from 'path'
import paths from '../../paths'

export default {
  test: /\.(woff|woff2|ttf|eot|svg)$/,
  exclude: path.resolve(process.cwd(), paths.input.icons),
  rules: [
    {
      loader: 'file-loader',
      options: {
        outputPath: `${paths.inputFontsDir}/`,
        name: '[name].[hash:8].[ext]'
      }
    }
  ]
}
