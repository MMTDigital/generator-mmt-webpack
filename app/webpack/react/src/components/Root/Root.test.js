/* global describe, test, expect, mount, snapshot */

import Root from './Root'

describe('The Root component', () => {
  test('can successfully render', () => {
    const minProps = {}
    const wrapper = mount(<Root {...minProps} />)

    expect(wrapper.length).toEqual(1)
    expect(snapshot(wrapper)).toMatchSnapshot()
  })
})
