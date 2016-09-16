// Description:
//   エイブラハム・リンカーン
// Commands:
//   korok リンカーン - president

module.exports = (robot => {
  robot.respond(/.*リンカーン/i, (msg => {
    msg.reply('おのをぶんぶんふりまわすほうのりんかーん？')
  }))
})
