const agent = process.env.npm_config_user_agent

if (!agent.startsWith('pnpm')) {

  console.error('')
  console.error('Your package manager is', agent)
  console.error('Please use pnpm to manage dependencies in this repository.')
  console.error('$ npm i pnpm -g')
  console.error('')

  process.exit(1)
}
