// Description:
//   Shinitai
// Commands:
//   korok 死にたい - too young too die

module.exports = (robot => {
  robot.respond(/(死|し)にたい/i, (msg => {
    var re = [
      'おうちにかえって、おいしいものたべて、おふとんですやすやしましょう！',
      'あしたはおやすみにして、あたみにいきましょう！',
      'もうねなさい！',
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
