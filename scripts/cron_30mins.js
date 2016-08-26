// Description:
//   cron 30 mins interval

const fs = require('fs')
const cronJob = require('cron').CronJob
const filepath = 'files/cron_30m.txt'

module.exports = (robot => {
  new cronJob(
    '00 00,30 * * * *',
    () => {
      var strings = fs.readFileSync(filepath).toString().split('\n').slice(0,-1)
      var string = strings[Math.floor(Math.random() * (strings.length))]
      robot.send({}, `${string}`)
    },
    null, true, "Asia/Tokyo"
  )
})

