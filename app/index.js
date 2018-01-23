const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const mkdirp = require('mkdirp')
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
    mkdirp.sync('config/webpack')

    const { projectName } = this.props

    this.fs.copy(this.templatePath('.babelrc'), this.destinationPath('.babelrc'))
    this.fs.copy(this.templatePath('jsconfig.json'), this.destinationPath('jsconfig.json'))
    this.fs.copy(this.templatePath('src/**'), this.destinationPath('src'))

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { projectName }
    )

    this.fs.copy(
      this.templatePath('config/**'),
      this.destinationPath('config')
    )
  }

  install() {
    this.installDependencies();
  }
}
