// Description:
//   hai hai
// Commands:
//   korok いんぐりもんぐり - tekitou

const fs = require('fs')
const filepath = 'files/zzz.txt'

module.exports = (robot => {
  robot.catchAll( (msg) => {
    if(msg.message.text.match(new RegExp(`@${robot.name}\\s`, 'i'))) {
      var strings = fs.readFileSync(filepath).toString().split('\n')
      var string = strings[Math.floor(Math.random() * (strings.length))]
      msg.reply(`${string}`)
    }
  })
})
