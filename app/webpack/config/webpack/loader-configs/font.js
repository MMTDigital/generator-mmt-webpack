import path from 'path'
import paths from '../../paths'

export default {
  test: /\.(woff|woff2|ttf|eot|svg)$/,
  include: path.resolve(process.cwd(), paths.input.fonts),
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
