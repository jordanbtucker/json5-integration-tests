const {basename, extname, resolve} = require('path')
const glob = require('fast-glob')

const targetDirs = glob.sync('./webpack/*', {onlyDirectories: true})

const configs = targetDirs
  .map(targetDir => {
    const target = basename(targetDir)

    /** @type {import('webpack').Configuration} */
    const defaultConfig = {
      mode: 'development',
      target,
      output: {
        clean: true,
        path: resolve(`${targetDir}/dist`),
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
      },
      devtool: 'source-map',
    }

    return glob.sync(`${targetDir}/*.{js,mjs}`).map(filename => {
      const baseFilename = basename(filename, extname(filename))

      /** @type {import('webpack').Configuration} */
      const config = {
        ...defaultConfig,
        // name: `web-${baseFilename}`,
        entry: filename,
        output: {
          ...defaultConfig.output,
          filename: `${baseFilename}.js`,
        },
      }

      return config
    })
  })
  .flat()

// const configs = filenames.map(filename => {
//   const baseFilename = basename(filename, extname(filename))

//   /** @type {import('webpack').Configuration} */
//   const config = {
//     ...defaultConfig,
//     name: `web-${baseFilename}`,
//     entry: filename,
//     output: {
//       ...defaultConfig.output,
//       filename: `${baseFilename}.js`,
//     },
//   }

//   return config
// })

module.exports = configs
