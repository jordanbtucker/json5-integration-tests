const {deepStrictEqual} = require('assert')

const {parse} = require('json5')

const value = parse('{a:1}')
deepStrictEqual(value, {a: 1})
