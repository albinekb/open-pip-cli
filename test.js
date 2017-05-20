import test from 'ava'
import pip from './index'

test('Process stdin', async t => {
  const result = pip.processStdin('  index test.mp4 ')
  const expected = 'index test.mp4'
  t.true(expected === result)
})

test('Process youtube video on input', async t => {
  const result = await pip.processInput('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  const urlRegex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/)
  t.true(urlRegex.test(result))
})

test('Wrong video throws error', async t => {
  t.plan(1)
  pip.processInput('https://www.youtube.com/wrongvideo').catch(() => t.pass())
})
