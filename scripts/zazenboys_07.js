// Description:
//   ZAZEN BOYS
// Commands:
//   korok 殺！ - call and response

module.exports = (robot => {
  robot.respond(/殺！/i, (msg => {
    msg.reply('伐！')
  }))
})


