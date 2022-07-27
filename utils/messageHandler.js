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

  if (text === '/how') {
    echo = [
      { type: 'text', text: '超極巨皮卡丘可以將任意蝦皮網址縮短成最適合社群使用的長度', emojis: [{ index: 0, productId: '5ac2213e040ab15980c9b447', emojiId: '007' }] },
      { type: 'text', text: '只需要把蝦皮上長長的連結複製貼進來,或是利用Line的分享功能直接分享進來' },
      { type: 'text', text: '超極巨皮卡丘就會從寶貝球裡出來打工' }
    ]
  }
  return echo
}

const stickerHandler = async event => {
  const stickerId = getRandom(1988, 2027)
  const echo = [
    { type: 'text', text: '(皮卡皮卡~' },
    { type: 'sticker', packageId: '446', stickerId: stickerId.toString() }
  ]
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

const getRandom = (min,max) => {
  return Math.floor(Math.random()*(max-min+1))+min
}

module.exports = {
  textHandler,
  stickerHandler
}