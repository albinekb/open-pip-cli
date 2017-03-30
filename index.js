#!/usr/bin/env node
const open = require('open-pip')
const ora = require('ora')
const getStdin = require('get-stdin')
const spinner = ora().start()

const help = () => spinner.info('Usage: open-pip <path | youtube-url | twitch-url | other-video-url>')

getStdin()
.then(stdin => {
  if (stdin) return stdin.trim()

  const input = process.argv[2]
  if (!input) {
		help()
		throw new Error('No url supplied')
	}
  return input
})
.then(input => open(input))
.then(() => {
  spinner.stopAndPersist({ symbol: '🌟', text: 'Running!' })
})
.catch((err) => {
  spinner.fail('Something went wrong')
  if (err) console.log(err)
})
