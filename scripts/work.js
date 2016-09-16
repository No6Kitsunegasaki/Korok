// Description:
//   はたらきたくない
// Commands:
//   korok はたらけ - work! work! work!

module.exports = (robot => {
  robot.respond(/.*(はたらけ|働け|しごとしろ|仕事しろ)/i, (msg => {
    msg.reply('All work and no play makes Jack a dull boy.')
  }))
})
