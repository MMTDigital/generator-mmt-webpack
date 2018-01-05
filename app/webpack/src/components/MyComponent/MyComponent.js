class MyComponent {
  constructor (wrapperClassName, buttonClassName) {
    this.wrapperClassName = wrapperClassName
    this.buttonClassName = buttonClassName
    this.something = 0

    const instance = document.querySelector(`.${this.wrapperClassName}`)

    if (!instance) {
      throw new Error(`.${this.wrapperClassName} was not found, therefore ${this.constructor.name} was not initiated...`)
    }

    this.setupListeners(buttonClassName)
  }

  setupListeners (buttonClassName) {
    if (buttonClassName) {
      document.addEventListener(`.${buttonClassName}`, this.onButtonClick)
    }
  }

  onButtonClick = (event) => {
    console.info('The button was clicked :)')
  }

  incrementSomething () {
    return this.something++
  }
}

export default MyComponent
