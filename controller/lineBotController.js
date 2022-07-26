const messageHandler = event => {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null)
  }
  const echo = { type: 'text', text: event.message.text }
  return client.replyMessage(event.replyToken, echo)
}

module.exports = {
  messageHandler
}