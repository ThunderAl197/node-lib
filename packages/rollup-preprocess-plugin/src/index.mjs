import {createFilter} from '@rollup/pluginutils'
import url from 'node:url'

const defaults = {
  exclude: null,
  include: /\.preprocess\.mjs/i,
}

export default function preprocess(opts = {}) {
  const options = Object.assign({}, defaults, opts)
  const filter = createFilter(options.include, options.exclude)

  return {
    name: '@thunderal/rollup-preprocess-plugin',

    load: {
      order: 'pre',
      async handler(id) {
        if (!filter(id)) {
          return null
        }

        const preprocessModule = await import(url.pathToFileURL(id))
        const preprocessFunc = preprocessModule.default

        if (!preprocessFunc) {
          throw new Error(`Preprocess module dont have default exported function`)
        }

        return await preprocessFunc()
      },
    },

  }
}
