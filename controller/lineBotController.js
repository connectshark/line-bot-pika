const bot = require('../bot/index')
const client = new bot.lineBot.Client(bot.config)
const messageHandler = require('../utils/messageHandler')

const messageObject = {
  text: messageHandler.textHandler
}

const eventHandler = async (event) => {
  const eventType = event.type
  console.log(eventType)
  switch (eventType) {
    case 'message':
      const messageType = event.message.type
      const echo = await messageObject[messageType](event)
      return client.replyMessage(event.replyToken, echo)
    default:
      return Promise.resolve(null)
  }
}

module.exports = {
  eventHandler
}