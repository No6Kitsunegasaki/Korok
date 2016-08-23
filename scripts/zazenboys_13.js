// Description:
//   ZAZEN BOYS
// Commands:
//   korok フラストレーション！ - call and response

module.exports = (robot => {
  robot.respond(/フラストレーション/i, (msg => {
    msg.reply('インマイブラッド！')
  }))
})
