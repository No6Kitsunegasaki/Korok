// Description:
//   ZAZEN BOYS
// Commands:
//   korok 私は海を！ - call and response

module.exports = (robot => {
  robot.respond(/私は海を！/i, (msg => {
    msg.reply('だきしめていたい！')
  }))
})
