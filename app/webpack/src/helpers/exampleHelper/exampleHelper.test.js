/* global describe, test, expect */

import exampleHelper from './'

describe('The exampleHelper helper', () => {
  test('can add two numbers', () => {
    expect(exampleHelper(1, 1)).toBe(2)
  })
})
