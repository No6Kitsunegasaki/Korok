// Description:
//   ZAZEN BOYS
// Commands:
//   korok 論！ - call and response

module.exports = (robot => {
  robot.respond(/論！/i, (msg => {
    msg.reply('客！')
  }))
})
