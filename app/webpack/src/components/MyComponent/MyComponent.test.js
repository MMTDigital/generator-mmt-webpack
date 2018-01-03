/* global describe, test, expect, shallow */

import MyComponent from './MyComponent'

describe('The MyComponent component', () => {
  shallow(`<div class="js-class-name"></div>`)
  test('can increment by one', () => {
    const component = new MyComponent('js-class-name')
    component.incrementSomething()
    expect(component.something).to.equal(1)
  })

  test('does not increment by more than one at a time', () => {
    shallow(`<div class="js-class-name"></div>`)
    const component = new MyComponent('js-class-name')
    component.incrementSomething()
    expect(component.something).to.not.equal(5)
  })
})
