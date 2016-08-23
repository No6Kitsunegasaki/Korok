// Description:
//   ZAZEN BOYS
// Commands:
//   korok 有！ - call and response

module.exports = (robot => {
  robot.respond(/有！/i, (msg => {
    msg.reply('理！')
  }))
})
