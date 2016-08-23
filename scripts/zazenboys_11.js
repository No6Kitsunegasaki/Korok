// Description:
//   ZAZEN BOYS
// Commands:
//   korok スピーカーがふたつあるってことは - call and response

module.exports = (robot => {
  robot.respond(/スピーカーがふたつあるってことは！/i, (msg => {
    msg.reply('そこににじげんのせかいがあるってことなんですね！')
  }))
})
