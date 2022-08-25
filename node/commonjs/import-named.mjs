import {deepStrictEqual} from 'assert'

import {parse} from 'json5'

const value = parse('{a:1}')
deepStrictEqual(value, {a: 1})
