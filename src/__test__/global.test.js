const text = 'Hello word'
const fruit = ['banana', 'lemon', 'orange']

//strings
test('Text must be a string', () => {
  expect(text).toMatch(/word/)
})

// arrays
test('Do we have a banana?', () => {
  expect(fruit).toContain('banana')
})

// numbers
test('Mayor que', () => {
  expect(10).toBeGreaterThan(9)
})

//boolean

test('true', () => {
  expect(true).toBeTruthy()
})

// callbacks
test('Test callback', () => {
  reverseString('Hello', (srt) => {
    expect(srt).toBe('olleH')
  })
})

const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''))
}
