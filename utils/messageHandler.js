const fetch = require('node-fetch')
const SHOPEE_API_URL = process.env.SHOPEE_API_URL

const textHandler = async event => {
  const text = event.message.text
  const isShopeeLink = text.includes('https://shopee.tw/', 0)
  let echo = { type: 'text', text: event.message.text }
  if (isShopeeLink) {
    let str = `id0=bot&id1=${event.timestamp}&id2=&id3=&id4=`
    try {
      const link = await shortShopeeLink(event.message.text, str)
      echo = [
        { type: 'text', text: '轉換成功 (皮卡皮卡~' },
        { type: 'text', text: link }
      ]
    } catch (error) {
      echo = [
        { type: 'text', text: '好像有點問題 (皮卡皮卡~' },
        { type: 'text', text: error }
      ]
    }
  }
  return echo
}

const shortShopeeLink = (url, subIds) => {
  return new Promise((resolve, reject) => {
    fetch(SHOPEE_API_URL + `/shopee?input=${url}&${subIds}`)
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
  textHandler
}