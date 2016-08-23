// Description:
//   OOO
// Commands:
//   korok (タカ)(トラ)(バッタ) - 歌は気にするな

module.exports = (robot => {
  robot.respond(/\((.+)\).*\((.+)\).*\((.+)\)/i, (msg => {
    var combos = {
      'タカ,トラ,バッタ': 'タットッバッ！タトバ！タットッバッ！',
      'クワガタ,カマキリ,バッタ': 'ガータガタガタガタキリッバ！ガタキリッバ！',
      'ライオン,トラ,チーター': 'ラットラーター！ラットラーター！',
      'サイ,ゴリラ,ゾウ': 'サゴーゾ……、サッゴーゾー！',
      'タカ,クジャク,コンドル': 'タージャードルー！',
      'シャチ,ウナギ,タコ': 'シャシャシャウター！シャシャシャウター！',
      'プテラ,トリケラ,ティラノ': 'プ！ト！ティラ〜ノ！ザウル〜ス！',
      '悪,即,斬': '牙突！',
      'ヌルヌル,ツバメ,イヌ': 'ヌ！ル！ツ！バイ！',
    }
    var medals = [ msg.match[1], msg.match[2], msg.match[3] ]
    var key = `${medals[0]},${medals[1]},${medals[2]}`
    var combo = key in combos ? combos[key] : ''
    msg.reply(`${medals[0]}！${medals[1]}！${medals[2]}！${combo}`)
  }))
})
