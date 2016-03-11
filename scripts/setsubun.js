// Description:
//   鬼は外　福は内 
// Commands:
//   korok 鬼 - 

module.exports = (robot => {
  robot.respond(/鬼/i, (msg => {
    msg.reply('ひゅーん　三(豆)')
  }))
})
