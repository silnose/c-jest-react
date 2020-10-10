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

test('Testing Promises', () => {
  return reverseStringPromise('Hello').then((string) =>
    expect(string).toBe('olleH')
  )
})

test('Testing Async/Await ', async () => {
  const string = await reverseStringPromise('Hello')
  expect(string).toBe('olleH')
})
const reverseStringPromise = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('error'))
    }
    resolve(str.split('').reverse().join(''))
  })
}

afterEach(() => {
  console.log('Despues de cada prueba')
})

afterAll(() => {
  console.log('Despues de todas las pruebas')
})

beforeEach(() => {
  console.log('Antes de cada prueba')
})

beforeAll(() => {
  console.log('Antes de todas las pruebas')
})
