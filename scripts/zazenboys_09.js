// Description:
//   ZAZEN BOYS
// Commands:
//   korok まっぴるまから - call and response

module.exports = (robot => {
  robot.respond(/まっぴるまから/i, (msg => {
    msg.reply('たのしんでるふたり！')
  }))
})
