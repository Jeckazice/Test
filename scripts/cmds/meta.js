const metaEmojis = [
  "(っ◔◡◔)っ ♥", "╰(°▽°)╯", "(｡♥‿♥｡)", "༼ つ ◕‿◕ ༽つ", "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
  "(づ｡◕‿‿◕｡)づ", "(≧◡≦)", "٩(◕‿◕｡)۶", "(*≧ω≦*)", "♡( ◡‿◡ )",
  "(ᵔ◡ᵔ)", "(≧◡≦) ♡", "(─‿‿─)", "★~(◠‿◕✿)", "ʕ•́ᴥ•̀ʔっ",
  "♥‿♥", "(✿◠‿◠)", "(｡•́‿•̀｡)", "૮₍ ´• ˕ •` ₎ა", "ฅ^•ﻌ•^ฅ",
  "ʕっ•ᴥ•ʔっ", "(｡･ω･｡)ﾉ♡", "♥(ˆ⌣ˆԅ)", "(〃＾▽＾〃)", "(•̀ᴗ•́)و ̑̑",
  "ヾ(＾-＾)ノ", "ʕノ•ᴥ•ʔノ ︵ ┻━┻", "(╯°□°）╯︵ ┻━┻", "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
  "☜(⌒▽⌒)☞", "＼(＾▽＾)／", "(^人^)", "(*＾3＾)/～♡", "(ﾉ≧ڡ≦)",
  "°˖✧◝(⁰▿⁰)◜✧˖°", "(*≧▽≦)", "(≧∀≦)", "(｡･∀･)ﾉﾞ", "♬♫♪◖(● o ●)◗♪♫♬",
  "｡ﾟ(TヮT)ﾟ｡", "ヽ(＾Д＾)ﾉ", "♡(｡- ω -)", "(￣▽￣)", "(´｡• ω •｡`)",
  "(￣ε￣＠)", "☆*:.｡.o(≧▽≦)o.｡.:*☆", "(｡♥‿♥｡)", "ლ(╹◡╹ლ)", "(づ￣ ³￣)づ"
];

module.exports = {
  config: {
    name: "meta",
    version: "2.0",
    author: "Aesther",
    countDown: 2,
    role: 0,
    shortDescription: "🌟 Envoie un emoji ASCII aléatoire",
    longDescription: {
      fr: "Commande fun qui affiche un emoji ASCII kawaii aléatoire !"
    },
    category: "fun",
    guide: {
      fr: "{pn} → Envoie un emoji décoratif au hasard"
    }
  },

  onStart: async function ({ message }) {
    const random = metaEmojis[Math.floor(Math.random() * metaEmojis.length)];

    const styledMessage = `${random}`;

    return message.reply(styledMessage);
  }
};
