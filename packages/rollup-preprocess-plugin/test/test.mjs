import test from 'ava'
import * as rollup from 'rollup'
import preprocess from '../src/index.mjs'
import {getRollupBundleCode} from '../../../util/rollup.mjs'
import path from 'node:path'
import url from 'node:url'

process.chdir(url.fileURLToPath(new URL('.', import.meta.url)))

test('static generated code', async t => {
  const bundle = await rollup.rollup({
    input: './fixtures/static.mjs',
    plugins: [preprocess()],
  })

  t.snapshot(await getRollupBundleCode(bundle))
})

test('dynamic generated code', async t => {
  const bundle = await rollup.rollup({
    input: './fixtures/dynamic.mjs',
    plugins: [preprocess()],
  })

  t.snapshot(await getRollupBundleCode(bundle))
})
