// Description:
//   もふっ
// Commands:
//   korok (^o^) - mofu mofu face

module.exports = (robot => {
  robot.respond(/\(.*[;＾^・｀´][o○◎Oεω▽Дд][;＾^・｀´].*\)/i, (msg => {
    msg.reply('もふっ( ｀・ω´・)⊃)' + msg.match[1].slice(1))
  }))
})
