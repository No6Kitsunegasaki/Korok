// Description:
//   ZAZEN BOYS
// Commands:
//   korok おーさか - call and response

module.exports = (robot => {
  robot.respond(/おーさか/i, (msg => {
    msg.reply('のはしのうえ！！')
  }))
})
