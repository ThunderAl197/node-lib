export async function getRollupBundleCode(bundle, options = null, allFiles = false) {
  const {output} = await bundle.generate(options || {format: 'es', exports: 'auto'})

  if (allFiles) {
    return output.map(o => {
      return {
        code: o.code,
        fileName: o.fileName,
        source: o.source,
        map: o.map,
      }
    })
  }

  return output[0].code
}
