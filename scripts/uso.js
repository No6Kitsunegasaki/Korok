// Description:
//   Uso
// Commands:
//   korok 嘘 - lie

const fs = require('fs')
const filepath = 'files/uso.txt'

module.exports = (robot => {
  robot.respond(/.*うそ|ウソ|嘘/i, (msg => {
    var sentenses = fs.readFileSync(filepath).toString().split('\n').slice(0,-1)
    var line = sentenses[Math.floor(Math.random() * (sentenses.length))]
    msg.reply(`${line}`)
  }))
})
