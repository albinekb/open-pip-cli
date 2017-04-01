#!/usr/bin/env node
const open = require('open-pip')
const ytdl = require('ytdl-core')
const ora = require('ora')
const getStdin = require('get-stdin')
const spinner = ora().start()

const help = () => spinner.info('Usage: open-pip <path | youtube-url | twitch-url | other-video-url>')

const YOUTUBE_HOST = new RegExp('www.youtube')

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
.then(input => {
  if (YOUTUBE_HOST.test(input)) {
    spinner.stopAndPersist({symbol: '🚀', text: 'Found youtube link'})
    ytdl.getInfo(input, { debug: true }, (err, info) => {
      if (err) {
        open(input)
        return
      }

      open(info.formats[0].url)
    })
  } else {
    open(input)
  }
})
.then(() => {
  spinner.stopAndPersist({ symbol: '🌟', text: 'Running!' })
})
.catch((err) => {
  spinner.fail('Something went wrong')
  if (err) console.log(err)
})
