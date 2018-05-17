# generator-mmt-webpack [![MMT-Digital](https://img.shields.io/badge/MMT-Digital-red.svg)](https://www.mmtdigital.co.uk) [![NPM version][npm-image]][npm-url] [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![Stylelint](https://img.shields.io/badge/stylelint-standard-brightgreen.svg)](https://github.com/stylelint/stylelint-config-standard)


A yeoman generator to output a webpack boilerplate generator to seed internal MMT Digital projects. If you need to create a fresh front-end project for MMT, this is the tool to help you out!

## Installation
Assuming you have Node installed, installation is simple:

* `npm i -g yo generator-mmt-webpack`

Currently, Mac users will also need to install libpng (we're working on changing this):

* Install Homebrew
* `brew install libpng`

## Usage

**Note: Make sure the directory is empty. The generator will even create your package.json for you.**

To generate your MMT Digital front-end boilerplate, `cd` to the directory where the front-end code for your project is, then run:

* `yo mmt-webpack`

For more information on usage, please check on the internal MMT wiki (Drop a message in the #front-end Slack channel).

### Favicon Support

The webpack setup supports Favicon generation OOTB (Out of the box 👍).

In order to use this functionality; simply replace the image located at: `src/assets/images/favicon.png` with your project's required favicon. The task to generate the different icons, can be found in the base webpack config; should you wish to make an changes to the way icons are generated.

https://github.com/jantimon/favicons-webpack-plugin

## Contribution

If you want to tweak the generator locally and contribute:

* Install Node and Yeoman
* Pull this repo
* `cd` to the cloned root directory
* run `npm link` (this will allow you to globally test, without publishing)
* Any problems, just hit me up (James Sear, @jpsear)

[npm-image]: https://badge.fury.io/js/generator-mmt-webpack.svg
[npm-url]: https://npmjs.org/package/generator-mmt-webpack
