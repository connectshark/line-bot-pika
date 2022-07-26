const express = require('express')
const router = express.Router()
const linebot = require('@line/bot-sdk')
const config = {
  channelAccessToken: process.env.BOT_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.BOT_CHANNEL_SECRET
}
const client = new linebot.Client(config)

router.post('/', linebot.middleware(config), (req, res) => {
	console.log(req, res)
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err)
      res.status(500).end()
    })
})

const handleEvent = event => {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null)
  }
  const echo = { type: 'text', text: event.message.text }
  return client.replyMessage(event.replyToken, echo)
}

module.exports = router