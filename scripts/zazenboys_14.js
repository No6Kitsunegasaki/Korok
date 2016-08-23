// Description:
//   ZAZEN BOYS
// Commands:
//   korok 福岡市博多区から - call and response

module.exports = (robot => {
  robot.respond(/福岡市博多区から/i, (msg => {
    msg.reply('ナンバーガールです。ドラムス！アヒトイナザワ！')
  }))
})
