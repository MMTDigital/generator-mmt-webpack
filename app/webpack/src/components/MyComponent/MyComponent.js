class MyComponent {
  constructor (wrapperClassName, buttonClassName) {
    console.info(`${this.constructor.name} has mounted`)

    this.wrapperClassName = wrapperClassName
    this.buttonClassName = buttonClassName
    this.something = 0

    const instance = document.querySelector(`.${this.wrapperClassName}`)

    if (!instance) {
      throw new Error(`.${className} was not found, therefore ${this.constructor.name} was not initiated...`)
    }

    this.setupListeners(buttonClassName)
  }

  setupListeners (buttonClassName) {
    if (buttonClassName) {
      document.addEventListener(`.${buttonClassName}`, onButtonClick)
    }
  }

  onButtonClick = (event) => {
    console.info('The button was clicked :)')
  }

  incrementSomething () {
    this.something++
  }
}

const component = new MyComponent()
export default component
