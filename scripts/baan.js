// Description:
//   Baan
// Commands:
//   korok バーン！ - Omae datta noka...

module.exports = (robot => {
  robot.respond(/バーン|ばーん/i, (msg => {
    msg.reply('ドサッ')
  }))
})

module.exports = (robot => {
  robot.respond(/お前だったのか/i, (msg => {
    re = ['（こくり）', 'いえ、ちがいます。']
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
