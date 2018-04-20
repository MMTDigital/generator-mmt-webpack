const Generator = require('yeoman-generator')
const path = require('path')

module.exports = class extends Generator {
  paths () {
    this.sourceRoot(path.join(__dirname, 'webpack'))
  }

  prompting () {
    this.log(`
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  |   👌   Welcome to the MMT Webpack Seed Project Generator  👌   |
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    `)

    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of this project? Keep it lowercase and dash-separated. For example: vodafone-marketing-site'
      }
    ]

    return this.prompt(prompts).then(props => {
      this.props = props
    })
  }

  writing () {
    const { projectName } = this.props

    this.fs.copy(
      this.templatePath('**/*'),
      this.destinationPath(), {
        globOptions: {
          dot: true,
          ignore: ['**/node_modules/**', '**/react/**']
        }
      })

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { projectName }
    )
  }

  install () {
    this.installDependencies({
      bower: false,
      npm: true
    })
  }
}
