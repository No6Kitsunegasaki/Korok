// Description:
//   seikyo at Friday morning

const cronJob = require('cron').CronJob

module.exports = (robot => {
  new cronJob(
    '00 00 7 * * fri',
    () => {
      var string = "@slept 生協！";
      robot.send({}, `${string}`)
    },
    null, true, "Asia/Tokyo"
  )
})

