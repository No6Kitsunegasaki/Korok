// Description:
//   cron 30 mins interval

const request = require('request')
const cronJob = require('cron').CronJob
const fitbit_base_url = 'https://api.fitbit.com'

module.exports = (robot => {
  new cronJob(
    '0 0 12 * * *',
    () => {
      var comments
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
          var last_weight = weight[weight.length -1]['weight']
          var url = fitbit_base_url + `/1/user/-/body/log/weight/goal.json`
          options['url'] = url
          request.get(options, function(error, response, body) {
            var goal = body['goal']
            var start_weight = goal['startWeight']
            var goal_weight = goal['weight']
            var start_diff = ((last_weight * 10) - (start_weight * 10)) / 10
            var goal_diff = ((last_weight * 10) - (goal_weight * 10)) / 10
            var comment = 'ふえてるんじゃないか！でぶ！'
            if(goal_diff <= 0) {
              comment = 'ぱんぱかぱーん！たっせいでーす！'
            } else if(goal_diff <= 2) {
              comment = 'もうちょい！いけるぞいけるぞ！'
            } else if(goal_diff <= 4) {
              comment = 'あとちょっとだ！あたまをきりおとせばいける！'
            } else if(goal_diff <= 6) {
              comment = 'なかなかいいちょうしだぞ！でぶ！'
            } else if(goal_diff <= 8) {
              comment = 'まだまだだぞ！でぶ！'
            } else if(goal_diff <= 10) {
              comment = 'ちょっとへったきたぞ！でぶ！'
            } else if(start_diff <= 0) {
              comment = 'やるきあんのか！でぶ！'
            }
            var string = `@No6 いまは${last_weight}kg！はじめてから${start_diff}kgになった！もくひょうまではあと${goal_diff}kgだよ！${comment}`
            robot.send({}, string)
          })
        } else {
          var string = `@No6 なんかいろいろだめ！たいじゅうきえた！`
          robot.send({}, string)
        }
      })
    },
    null, true, "Asia/Tokyo"
  )
})

