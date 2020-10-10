const cities = ['Lima', 'Buenos Aires', 'Mendoza']

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)]
  return string
}
const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''))
}

module.exports = randomString
