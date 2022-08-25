const {deepStrictEqual} = require('assert')

const JSON5 = require('json5')

const value = JSON5.parse('{a:1}')
deepStrictEqual(value, {a: 1})

// Force TypeScript to see this file as a module.
export {}
