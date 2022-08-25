import {deepStrictEqual} from 'assert'

async function main() {
  const {parse} = await import('json5')

  const value = parse('{a:1}')
  deepStrictEqual(value, {a: 1})
}

main()
