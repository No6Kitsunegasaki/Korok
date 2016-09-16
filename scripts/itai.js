// Description:
//   いたいのいたいのとんでけー
// Commands:
//   korok 痛い - heal magic

module.exports = (robot => {
  robot.respond(/.*(いたい|痛い|いたっ|痛っ|いてっ)/i, (msg => {
    msg.reply('いたいのいたいのとんでいけー！')
  }))
})
