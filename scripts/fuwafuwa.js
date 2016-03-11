// Description:
//   ふわふわ
// Commands:
//   korok ふわふわ - fuwaring

module.exports = (robot => {
  robot.respond(/ふわふわ/i, (msg => {
    var re = [
      'ばにちゃんのほうがふわふわだし！',
      'ふわふわ！',
      'ふわふわ！はくしょん！',
      'ふわふわ！はくしょん！むー！',
      'むぐぐ。',
      'ふわふわしないで！',
      'はくしょん！',
      'はくしょん！むー！',
      'むー！',
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
