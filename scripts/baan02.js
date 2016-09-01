// Description:
//   Baan 02
// Commands:
//   korok お前だったのか - Itumo kuri wo kuretanowa...

module.exports = (robot => {
  robot.respond(/お前だったのか/i, (msg => {
    re = ['（こくり）', 'いえ、ちがいます。']
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
