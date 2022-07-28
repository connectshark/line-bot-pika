# line-bot-pika
[![超極巨皮卡丘](/readme/pika.png)](https://line.me/R/ti/p/@848gsxak)

## 目錄

- [line機器人 超極巨皮卡丘](#line機器人超極巨皮卡丘)
- [主要技術說明](#主要技術說明)
- [開發line機器人的時候很有用的文件](#開發line機器人的時候很有用的文件)

## line機器人超極巨皮卡丘
主要功能是為了縮短蝦皮網址而生
串接與[蝦英雄](https://shopee.nosegates.com/)相同後端API
加入好友以後可傳入蝦皮網址,機器人即回傳縮短後的蝦皮網址

### 馬上試試!!
[馬上加好友試用](https://line.me/R/ti/p/@848gsxak)

手機可直接掃QRCODE加好友或點擊上方連結加入好友
[![QRCODE](/readme/848gsxak.png)](https://line.me/R/ti/p/@848gsxak)

可直接複製連結後傳入機器人,等待皮卡丘為你打工
```
https://shopee.tw/
```

## 主要技術說明

主要使用Line官方SDK(@line/bot-sdk)作為串接機器人的核心
- nodejs
- express
- @line/bot-sdk

部署至[render](https://render.com/)


## 開發line機器人的時候很有用的文件
- [官方文件](https://developers.line.biz/en/reference/messaging-api/#webhook-event-objects)
- [@line/bot-sdk](https://line.github.io/line-bot-sdk-nodejs/#introduction)
- [Line Enginnering Blog](https://engineering.linecorp.com/zh-hant/blog)
- [開發LINE聊天機器人不可不知的十件事](https://engineering.linecorp.com/zh-hant/blog/line-device-10/)
