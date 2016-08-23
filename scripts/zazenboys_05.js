// Description:
//   ZAZEN BOYS
// Commands:
//   korok さが！ - call and response

module.exports = (robot => {
  robot.respond(/さが！/i, (msg => {
    msg.reply('して！')
  }))
})
