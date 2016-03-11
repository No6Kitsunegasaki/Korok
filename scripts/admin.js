// Description:
//   check admin user
// Commands:
//   korok isAdmin - yes/no
module.exports = (robot => {
  robot.respond(/isAdmin/i, (msg) => {
    if(robot.auth.isAdmin(msg.message.user)) {
      msg.reply('yes')
    } else {
      msg.reply('no')
    }
  })
})

