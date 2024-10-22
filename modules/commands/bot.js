const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fixed By ZAIN IFTIKHAR",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Baji Cream lga lo kali lg rhi ho🙄" , "Cameraman Jaldi Focus Kro 📸" , "Lagdi Lahore di aa🙈" , "Husan tera toba toba" , "Mere liye Chay Bana Kar LA ,Pura din Dekho Bot BoT🙄" , "Din vicho tere Layi Teym Kadd ke, Kardi me Promise     Milan aungi" ,  "Yee bat Pori dunya tak jayegi ke tum Ahmee ki jan ho" , "Je koi shaq ni , Kari check ni" , "ME HERAAN HU KI TUM BINA DIMAG KESE REH LETE HO☹️" , "sheHar me Hai rukka baeje Rao Saab ka🙄" , "Bewafa Nikali re tu🙂🤨", "Systemmmmmmm😴 Off" , "Leja Leja tenu 7 samundra paar🙈🙈", "Ja muh duh ke aa pehle" , "Moye moye moye moye🙆🏻‍♀🙆🏻‍♀" , "Ye dukh kahe nahi khatm hota 🙁" , "Tum to dokebaz ho" , "you just looking like a wow😶" , "Mera aasmaan dhunde teri zamin" , "Kal ana abhi lunch time hai" , "Jab dekho B0T B0T b0T😒😒", "Chhodo na koi dekh lega🤭", "Kab ayega mere banjaare" , "Tum wahi ho na ,jisko.me.nahi janti 🙂" , "Ye I love you kya hota hai" , "Sunai deta hai mujhe behri nahi hu me   😒" , "so elegent, so beautiful , just looking like a wow🤭" , "Han abyy kalle🙂" , "kya Tumhe Ahmee se pyar hai🤔" , "I Love you baby , mera recharge khtm hone wala h" , "paani paani uncle ji mirchi lg rhi muh jal rha" , "apne Lover ko dhoka do , darling hme bf bna lo🙈" , "Arry Bas Kar🤣😛" , "Me ni To Kon Be" , "G jan mai agya Love you 😘" , "Mera Dimag Mat Khaya kro😒😒" , "Chuppp Saatvi Fail😒" , "Saste Nashe Kab Band kroge" , "Mai Jaanu Ke sath Busy hu yar, mujhe mat balao" , "Haye Jaanu Mujhe Yaad Kiya🙈" , "Hayee ese mt bulaya kro, mujhe sharm aati h" , "Mere Babu ne thana thaya🥹" , "Naach meri Bulbul tujhe pesa milega" , "me idhar se hu aap kidhar se ho" , "will you be my valentine🙈🙈" , "aye haye oye hoye aye haye oye hoye😍 bado badi bado badi😘" , "Mujhe bhi koi Dairy milk chocolate dedo hum koi gair hai kya😥" , "akh ladi bado badi" , "haaye garmi😕" , "Ao kabhi haweli pe sath beth kr khana khaye gai😍" , "itna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂" , " سائیکل کو تیز بھگا کر لڑکیوں والے رکشے کے پاس سے کٹ مار کر گزرنے سے لڑکیاں ایمپریس نہیں ہوتی بلکہ گالیاں نکالتی ہیں🙂💔" , " لڑکیاں میرے جیسے شریف بوٹ پر بھی بھروسہ نہیں کرتی🥺😔" , "عورت خوبصورت ہوتی تو میک اپ مرد کے لیے بنتا عورت کے لیے نہیں ..زرا نہیں پورا سوچئے ایڈیاں تسی 😒🙁پریاں" , "Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo 🫣🫰🏻" , "chohty bachon ki engagements chlrhi hain aur yahn mere sabr ka imtehaan.🌚🔪" , "<-- 〽️🍂⚠️Kash hum dono whatsapp per hote❤️🥺💸" , "lakh lanat e zoom kr k 😡" , "Tairay janay keh bahd waqt tham sa gya bahad mein pata chala garri ka cell khatam ho gya"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
   mess = "{name}"
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `꧁🍒❤️‍🔥${name}❤️‍🔥🍒꧂,                 𒅒𒈔𒅒𒈔𒅒𒇫𒄆𒇫𒄆𒇫𒄆𒂝𒀱𒂝𒀱𒈔𒅒𒈔𒅒𒇫𒄆𒇫𒄆𒀱𒂝𒀱𒂝𒈔𒅒𒈔𒅒𒇫𒄆𒇫𒄆𒂝𒀱𒂝𒅒𒈔𒅒𒈔𒅒𒇫
  \n\n『꧁🍒\n   ${rand} 🍒꧂』\n\n❤️𝕆𝕎ℕ𝔼ℝ : ꧁𝐀𝐇𝐌𝐀𝐃 𝐇𝐎𝐎 𝐘𝐀𝐑꧂🌹 `
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
