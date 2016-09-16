// Description:
//   ウメハラが！捕まえて！ウメハラが！画面端！
//   バースト読んで！まだ入る！
//   ウメハラが！近づいて！ウメハラが決めたー！
// Commands:
//   korok ウメハラが！ - Umehara 01

module.exports = (robot => {
  robot.respond(/(うめはら|ウメハラ|梅原)が/i, (msg => {
    var re = [
      'つかまえて！',
      'がめんはじ！',
      'ちかづいて！',
      'きめたー！'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
