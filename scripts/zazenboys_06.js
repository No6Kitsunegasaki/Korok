// Description:
//   ZAZEN BOYS
// Commands:
//   korok 新！ - call and response

module.exports = (robot => {
  robot.respond(/新！/i, (msg => {
    msg.reply('宿！')
  }))
})
