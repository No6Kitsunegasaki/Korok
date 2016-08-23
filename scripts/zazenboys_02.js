// Description:
//   ZAZEN BOYS
// Commands:
//   korok 用！ - call and response

module.exports = (robot => {
  robot.respond(/用！/i, (msg => {
    msg.reply('無し！')
  }))
})
