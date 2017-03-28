#!/usr/bin/env node
const open = require('open-pip')
const ora = require('ora')
const spinner = ora().start()

const input = process.argv[2]

if (!input) throw new Error('No url supplied')

open().then(() => {
  spinner.stopAndPersist({ symbol: '🌟', text: 'Running' })
})
.catch((err) => {
  spinner.fail('Something went wrong')
  if (err) console.log(err)
})
