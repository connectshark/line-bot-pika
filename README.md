# line-bot-pika

line機器人 超極巨皮卡丘

[官方文件](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)

[@line/bot-sdk](https://line.github.io/line-bot-sdk-nodejs/#introduction)

[Line Enginnering Blog](https://engineering.linecorp.com/zh-hant/blog)

[開發LINE聊天機器人不可不知的十件事](https://engineering.linecorp.com/zh-hant/blog/line-device-10/)

```
{
  type: 'message',
  message: { type: 'text', id: '16496853841477', text: 'Test' },
  webhookEventId: '01G8WP101JFJW8B4MZS7R4VHF3',
  deliveryContext: { isRedelivery: false },
  timestamp: 1658820001737,
  source: { type: 'user', userId: 'Ud6ea077172cd4b4235877efd079f255f' },
  replyToken: 'ba6cb1383fad4c21b1c8fb3a6e291b72',
  mode: 'active'
}
```