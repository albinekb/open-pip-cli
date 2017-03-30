# 📺 open-pip-cli [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![](https://img.shields.io/npm/dm/open-pip-cli.svg) ![](https://img.shields.io/npm/v/open-pip-cli.svg)


CLI for [open-pip](https://github.com/albinekb/open-pip)
This will let you open a movie url/path in macOS native picture-in-picture player.

Both local files and urls are supported.

Known **working** formats
  - mp4
  - m4v
  - mov
  - m3u8

Known **not** working formats
  - mkv
  - avi

## example

![example](https://cloud.githubusercontent.com/assets/5027156/24427435/3529cfc4-140b-11e7-9799-de7326ddc088.gif)

You can also pipe any video URL to `open-pip`. For example, using the [ytdl](https://www.npmjs.com/package/ytdl) module, you can play a YouTube video:

```sh
yarn global add ytdl
ytdl --print-url --filter-container=mp4 _HSylqgVYQI | open-pip
```

Using the [twitch-url-cli](https://www.npmjs.com/package/twitch-url-cli) module, you can stream a Twitch channel (you need a Twitch client ID though)

```sh
yarn global add twitch-url-cli
echo "abcdefghijklmno12345" > ~/.twitch-client-id
twitch-url BobRoss | open-pip
```

Let us know if you have examples for more services.

## install

### yarn

```sh
yarn global add open-pip-cli
```

### npm
```sh
npm install --global open-pip-cli
```

## requirements
As the native picture-in-picture player is only available in macOS Sierra (10.12) and above, this module will also only work with with those versions.

### Author

Albin Ekblom ([@albinekb](https://github.com/albinekb))
