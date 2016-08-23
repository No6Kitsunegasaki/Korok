// Description:
//   ZAZEN BOYS
// Commands:
//   korok ドラムス！ - call and response

module.exports = (robot => {
  robot.respond(/ドラムス！/i, (msg => {
    msg.reply('アヒトイナザワ！')
  }))
})
