// Description:
//   Omikuji
// Commands:
//   korok おみくじ - show omikuji

const fs = require('fs')
const filepath = 'files/omikuji.txt'

module.exports = (robot => {
  var patterns = [
    'みくじ',
    'ミクジ',
    'ﾐｸｼﾞ',
    '籤',
    'mkj',
    'おみくろん',
    'オミクロン',
    'ｵﾐｸﾛﾝ',
  ]
  robot.respond(new RegExp('.*('+patterns.join('|')+')', 'i'), (msg => {
    var omikujis = fs.readFileSync(filepath).toString().split('\n').slice(0,-1)
    var omikuji = omikujis[Math.floor(Math.random() * (omikujis.length))]
    msg.reply(`${omikuji}`)
  }))
})
