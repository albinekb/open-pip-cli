#!/usr/bin/env node
const open = require('open-pip')
const ytdl = require('ytdl-core')
const ora = require('ora')
const getStdin = require('get-stdin')
const spinner = ora().start()

const help = () => spinner.info('Usage: open-pip <path | youtube-url | twitch-url | other-video-url>')

const youtubeUrls = [
  new RegExp('www.youtube'),
  new RegExp('youtu.be')
]

const processStdin = stdin => {
  if (stdin) return stdin.trim()

  const input = process.argv[2]
  if (!input) {
    help()
    throw new Error('No url supplied')
  }
  return input
}

const processInput = async input => {
  let file = input

  for (const url of youtubeUrls) {
    if (url.test(input)) {
      const result = await ytdl.getInfo(input, {})
      file = result.formats[0].url
      spinner.stopAndPersist({symbol: '🚀', text: 'Found youtube link'})
    }
  }
  return file
}

getStdin()
.then(processStdin)
.then(async input => open(await processInput(input)))
.then(() => spinner.stopAndPersist({ symbol: '🌟', text: 'Running!' }))
.catch((err) => {
  spinner.fail('Something went wrong')
  if (err) console.log(err)
})

module.exports.processStdin = processStdin
module.exports.processInput = processInput
