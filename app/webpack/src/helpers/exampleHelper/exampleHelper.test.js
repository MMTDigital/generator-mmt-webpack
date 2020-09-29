/* global describe, test, expect */

import { add } from './exampleHelper'

describe('The exampleHelper helper', () => {
  test('can add two numbers', () => {
    expect(add(1, 1)).toBe(2)
  })
})
