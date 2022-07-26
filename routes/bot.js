const express = require('express')
const router = express.Router()
const lineBotMiddleware = require('@line/bot-sdk').middleware
const config = {
  channelAccessToken: process.env.BOT_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.BOT_CHANNEL_SECRET
}
const linebotController = require('../controller/lineBotController')

router.post('/', lineBotMiddleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(linebotController.messageHandler))
    .then(result => res.json(result))
    .catch(err => {
      res.status(500).end()
    })
})
module.exports = router