// Description:
//   ウメハラが！捕まえて！ウメハラが！画面端！
//   バースト読んで！まだ入る！
//   ウメハラが！近づいて！ウメハラが決めたー！
// Commands:
//   korok バースト読んで！ - Umehara 02

module.exports = (robot => {
  robot.respond(/バースト読んで/i, (msg => {
    msg.reply('まだはいるー！')
  }))
})
