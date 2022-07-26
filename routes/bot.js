const express = require('express')
const router = express.Router()
const linebot = require('linebot')
const bot = linebot({
  channelId: process.env.BOT_CHANNEL_ID,
  channelSecret: process.env.BOT_CHANNEL_SECRET,
  channelAccessToken: process.env.BOT_CHANNEL_ACCESS_TOKEN
})
const linebotParser = bot.parser()
const lineBotController = require('../controller/lineBotController')

router.post('/', linebotParser)
bot.on('message', lineBotController.messageHandler)

module.exports = router