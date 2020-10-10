const randomString = require('../index.js')

describe('Testing all func', () => {
  test('Testing type', () => {
    expect(typeof randomString()).toBe('string')
  })

  test('Test cities excluded', () => {
    expect(randomString()).not.toMatch(/eeuu/)
  })
})
