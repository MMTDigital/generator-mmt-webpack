/**
 * index.js
 *
 * This is the main JavaScript entry point file that Webpack will
 * build from. If you want a piece of JavaScript in your bundle,
 * you will need to include it here.
 *
 * As we are not using jQuery, your master page / html page / layout
 * page will need to initiate your JavaScript bundle. We can use the
 * `domready` package as a light-weight version of $document.ready().
 *
 * You might initiate your Javascript like so:
 * <script>
 *  domReady(function() {
 *    new App()
 *  })
 * </script>
 */

/* eslint-disable no-new */
/* eslint-disable no-unused-vars */

// We import assets and styles to prompt webpack to bundle them
import '@asset-manifest'
import '@global-styles'
import '@polyfills'

import domReady from 'domready'
import MyComponent from '@components/MyComponent'

class App {
  constructor () {
    new MyComponent('js-my-wrapper-class', 'js-my-button-class')
  }
}

window.domReady = domReady
window.App = App
