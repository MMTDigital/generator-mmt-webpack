import path from 'path'

// Input directory names
const inputSourceDir = 'src'
const inputAssetsDir = 'assets'
const inputEntryFile = 'index.js'
const inputFontsDir = 'fonts'
const inputIconsDir = 'icons'
const inputImagesDir = 'images'

// Output directory names
const outputBuildDir = 'build'
const outputAssetsDir = 'assets'
const outputFontsDir = 'fonts'
const outputImagesDir = 'images'

// Input full paths
const input = {
  entry: path.join(inputSourceDir, inputEntryFile),
  imagesEntry: path.join(inputSourceDir, 'images.js'),
  fonts: path.join(inputSourceDir, inputAssetsDir, inputFontsDir),
  icons: path.join(inputSourceDir, inputAssetsDir, inputIconsDir),
  images: path.join(inputSourceDir, inputAssetsDir, inputImagesDir)
}

// Output full paths
const output = {
  fonts: path.join(outputBuildDir, outputAssetsDir, outputFontsDir),
  images: path.join(outputBuildDir, outputAssetsDir, outputImagesDir)
}

export default {
  inputSourceDir,
  inputAssetsDir,
  inputEntryFile,
  inputFontsDir,
  inputIconsDir,
  inputImagesDir,

  outputBuildDir,
  outputAssetsDir,
  outputFontsDir,
  outputImagesDir,

  input,
  output
}
