class MyComponent {
  constructor () {
    console.info(`${this.constructor.name} has mounted`)
  }

  handleClick = (event) => {
    // Hello
  }
}

const component = new MyComponent()
export default component
