// Description:
//   バブは、炭酸ガスが温浴効果を高めて血行を促進、疲労・肩こり・冷え性に
//   効く薬用入浴剤シリーズです。ナチュラルな香りでリラックス気分のバスタ
//   イムをお楽しみください。
// Commands:
//   korok バブ - best babu

module.exports = (robot => {
  robot.respond(/バブ/i, (msg => {
    re = [
      'きょうのきぶんは……、ゆずのかおり！ゆずのうたをうたいます！ゆーずー！ゆずゆずー！ゆーずゆずーゆー！',
      'きょうのきぶんは……、もりのかおり！もりのかおりはね！もり！ってかんじのにおいがするの！',
      'きょうのきぶんは……、ひのきのかおり！おふろといえば！ひのきのかおり！おふろといえば！あいすのきぶん！はやくでてたべたい。',
      'きょうのきぶんは……、らべんだーのかおり！おふろばでときをかけたらどうなるのか……。むむむ……。ぽやーん。',
      'きょうのきぶんは……、しお！',
      'なにもいれない！',
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
