import {deepStrictEqual} from 'assert'

import JSON5 from 'json5'

const value = JSON5.parse('{a:1}')
deepStrictEqual(value, {a: 1})
