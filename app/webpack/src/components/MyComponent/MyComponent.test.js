/* global describe, test, expect, mount */
/* eslint-disable no-unused-vars */

import MyComponent from './MyComponent'

describe('The MyComponent component', () => {
  mount(`<div class="js-wrapper" />`)

  test('can mount', () => {
    const component = new MyComponent('js-wrapper', 'js-button')
  })

  test('can increment by one', () => {
    const component = new MyComponent('js-wrapper', 'js-button')
    component.incrementSomething()
    expect(component.something).toBe(1)
  })

  test('does not increment by more than one at a time', () => {
    const component = new MyComponent('js-wrapper', 'js-button')
    component.incrementSomething()
    expect(component.something).not.toBe(5)
  })
})
