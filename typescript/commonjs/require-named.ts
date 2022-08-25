const {deepStrictEqual} = require('assert')

const {parse} = require('json5')

const value = parse('{a:1}')
deepStrictEqual(value, {a: 1})

// Force TypeScript to see this file as a module.
export {}
