/*CMD
  command: /onLoadingddola
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
let txid = content
//Bot.sendMessage(content)
var usery =
  "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
let amo = User.getProperty("amo")
let wallet = User.getProperty("TRXwallet")
let balance = Libs.ResourcesLib.userRes("balance")
balance.add(-amo)
Api.sendPhoto({
  photo: "https://telegra.ph/file/13c398b90ca23660ffd9c.jpg",
  caption:
    "✅* Paid automatically \n\n⭐️ Amount - " +
    amo +
    " WHXC\n🍀 User ID - " +
    user.telegramid +
    "\n💠 Wallet - " +
    wallet +
    "\n\n⏰ Hash - *[" +
    txid +
    "](https://tronscan.org/#/transaction/" +
    txid +
    "",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "💠 Tronscan",
          url: "https://tronscan.org/#/transaction/" + txid + ""
        },
        { text: "💠Payment Channel", url: "https://t.me/FTWPayouts" }
      ]
    ]
  },
  disable_web_page_preview: true
})

Api.sendMessage({
  chat_id: "@FTWPayouts",
  text:
    "✅ *New Successful Withdraw !!\n\n⭐️ Amount - " +
    amo +
    " WHXC\n🦁 User - @" +
    user.username +
    "\n🍀 User ID - " +
    user.telegramid +
    "\n💠 Wallet - " +
    wallet +
    "\n☎️ User Referrals = " +
    refList.length +
    "\n☘Transaction ID* -\n[" +
    txid +
    "](https://tronscan.org/#/transaction/" +
    content +
    ")\n\n🏖* Bot Link - @"+bot.name+"\n⏩ Please Check Your Wallet*",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "💠 Payment ID ",
          url: "https://tronscan.org/#/transaction/" + content + ""
        },
        { text: "🍀 Bot Link", url: "https://t.me/"+bot.name+"" }
      ]
    ]
  },
  disable_web_page_preview: true
});
Api.sendMessage({
  chat_id: "@FTWPayouts",
  text:
  " *Join TRX AutoPay Bot\nPer Refer 0.4 TRX\nMinimum Withdraw 1 TRX\nLink Below*",parse_mode:"Markdown",reply_markup: { inline_keyboard: [
[
{ text: "💠 TRX Bot ", url: "https://t.me/AUTOTRXLOOTER_BOT?start=1724473563"}]]},disable_web_page_preview: true
})

