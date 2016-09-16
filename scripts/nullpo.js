// Description:
//   null po
// Commands:
//   korok ぬるぽ - null pointer exception

module.exports = (robot => {
  robot.respond(/.*(ぬ|め|あ|お)(る|ろ)(ぽ|ぼ|ほ|は|ば|ぱ)/i, (msg => {
    msg.reply('がっ！だし！')
  }))
})
