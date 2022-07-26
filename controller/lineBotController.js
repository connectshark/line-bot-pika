const lineBot = require('@line/bot-sdk')
const config = {
  channelAccessToken: process.env.BOT_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.BOT_CHANNEL_SECRET
}
const client = new lineBot.Client(config)
const fetch = require('node-fetch')
const SHOPEE_API_URL = process.env.SHOPEE_API_URL

const messageHandler = async (event) => {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null)
  }
  let str = `id0=bot&id1=${event.timestamp}&id2=&id3=&id4=`
  const link = await shortShopeeLink(event.message.text, str)
  const echo = { type: 'text', text: link }
  return client.replyMessage(event.replyToken, echo)
}

const shortShopeeLink = (url, subIds) => {
  return new Promise((resolve, reject) => {
    fetch(SHOPEE_API_URL + `/shopee/getShortLink?input=${url}&${subIds}`)
      .then(res => res.json())
      .then(res => {
        resolve(res.data.generateShortLink.shortLink)
      })
      .catch(err => {
        const code = err[0]?.extensions?.code
        if (code === 11001) {
          reject('記憶文字超過50字')
        } else {
          reject('稍待一下再嘗試')
        }
      })
  })
}

module.exports = {
  messageHandler
}