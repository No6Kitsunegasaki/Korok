// Description:
//   ZAZEN BOYS
// Commands:
//   korok 論！ - call and response

module.exports = (robot => {
  robot.respond(/論！/i, (msg => {
    msg.reply('客！')
  }))
})

module.exports = (robot => {
  robot.respond(/用！/i, (msg => {
    msg.reply('無し！')
  }))
})

module.exports = (robot => {
  robot.respond(/造！/i, (msg => {
    msg.reply('反！')
  }))
})

module.exports = (robot => {
  robot.respond(/有！/i, (msg => {
    msg.reply('理！')
  }))
})

module.exports = (robot => {
  robot.respond(/さが！/i, (msg => {
    msg.reply('して！')
  }))
})

module.exports = (robot => {
  robot.respond(/新！/i, (msg => {
    msg.reply('宿！')
  }))
})

module.exports = (robot => {
  robot.respond(/殺！/i, (msg => {
    msg.reply('伐！')
  }))
})

module.exports = (robot => {
  robot.respond(/おーさか/i, (msg => {
    msg.reply('のはしのうえ！！')
  }))
})

module.exports = (robot => {
  robot.respond(/まっぴるまから/i, (msg => {
    msg.reply('たのしんでるふたり！')
  }))
})
module.exports = (robot => {
  robot.respond(/いつかくる/i, (msg => {
    msg.reply('おわりのキセツ！')
  }))
})

module.exports = (robot => {
  robot.respond(/スピーカーがふたつあるってことは！/i, (msg => {
    msg.reply('そこににじげんのせかいがあるってことなんですね！')
  }))
})

module.exports = (robot => {
  robot.respond(/ドラムス！/i, (msg => {
    msg.reply('アヒトイナザワ！')
  }))
})

module.exports = (robot => {
  robot.respond(/フラストレーション/i, (msg => {
    msg.reply('インマイブラッド！')
  }))
})

module.exports = (robot => {
  robot.respond(/福岡市博多区から/i, (msg => {
    msg.reply('ナンバーガールです。ドラムス！アヒトイナザワ！')
  }))
})

module.exports = (robot => {
  robot.respond(/私は海を！/i, (msg => {
    msg.reply('だきしめていたい！')
  }))
})
