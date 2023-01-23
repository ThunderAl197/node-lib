import fs from 'node:fs/promises'
import crypto from 'node:crypto'

export default async function () {

  const packageFile = await fs.readFile('../package.json')
  const packageJson = JSON.parse(packageFile.toString())

  const hash = crypto.createHash('sha512')
    .update(packageJson.name)
    .digest()
    .toString('hex')
    .substring(0, 8)

  return [
    `export const packageName = ${JSON.stringify(packageJson.name)};`,
    `export const license = ${JSON.stringify(packageJson.license)};`,
    `export const hash = ${JSON.stringify(hash)};`,
  ].join('\n')
}
