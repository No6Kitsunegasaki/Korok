// Description:
//   ZAZEN BOYS
// Commands:
//   korok 造！ - call and response

module.exports = (robot => {
  robot.respond(/造！/i, (msg => {
    msg.reply('反！')
  }))
})
