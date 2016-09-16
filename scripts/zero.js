// Description:
//   100万ドルでも夢は買えない
// Commands:
//   korok 事情を説明したまえ - benkai is zaiaku

module.exports = (robot => {
  robot.respond(/.*事情を説明/i, (msg => {
    msg.reply('いますこしじかんとよさんをいただければ……。')
  }))
})
