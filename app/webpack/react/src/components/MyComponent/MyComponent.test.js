/* global describe, test, expect, mount, snapshot */

import MyComponent from './MyComponent'

describe('The MyComponent component', () => {
  test('can successfully render', () => {
    const minProps = {}
    const wrapper = mount(<MyComponent {...minProps} />)

    expect(wrapper.length).toEqual(1)
    expect(snapshot(wrapper)).toMatchSnapshot()
  })
})
