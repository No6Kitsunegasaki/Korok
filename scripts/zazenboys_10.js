// Description:
//   ZAZEN BOYS
// Commands:
//   korok いつかくる - call and response

module.exports = (robot => {
  robot.respond(/いつかくる/i, (msg => {
    msg.reply('おわりのキセツ！')
  }))
})
