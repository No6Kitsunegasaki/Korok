// Description:
//   cron 30 mins interval

const request = require('request')
const cronJob = require('cron').CronJob
const fitbit_base_url = 'https://api.fitbit.com'

module.exports = (robot => {
  new cronJob(
    //'*/5 * * * * *',
    '0 0 12 * * *',
    () => {
      var now = (new Date()).toISOString().slice(0,10)
      var url = fitbit_base_url + `/1/user/-/body/log/weight/date/${now}/30d.json`
      var options = {
        url: url,
        method: 'GET',
        json: true,
        headers: {
          Authorization: 'Bearer ' + process.env.FITBIT_ACCESS_TOKEN,
          'Accept-Language' : 'es_ES'
        }
      }
      request.get(options, function(error, response, body) {
        if(!error && response.statusCode == 200) {
          var weight = body.weight
          var last_weight = weight[weight.length -1]
          var string = `@No6 ${last_weight['weight']}`
          robot.send({}, string)
          //console.log(string)
        } else {
          var string = `なんかいろいろだめ！たいじゅうきえた！`
          robot.send({}, string)
          //console.log(string)
        }
      });
    },
    null, true, "Asia/Tokyo"
  )
})

