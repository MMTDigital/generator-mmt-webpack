import autoprefixer from 'autoprefixer'

export default {
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
