const {deepStrictEqual} = require('assert')

async function main() {
  const {default: JSON5} = await import('json5')

  const value = JSON5.parse('{a:1}')
  deepStrictEqual(value, {a: 1})
}

main()
