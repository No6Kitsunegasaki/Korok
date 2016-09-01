// Description:
//   Baan 01
// Commands:
//   korok バーン！ - DOSA!

module.exports = (robot => {
  robot.respond(/バーン|ばーん/i, (msg => {
    msg.reply('ドサッ')
  }))
})
