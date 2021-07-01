/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: cr
CMD*/

var userstat = User.getProperty("status");
var referbonus = User.getProperty("referbonus");
if (userstat=="member" | userstat =="administrator" | userstat =="creator"){
if (referbonus == undefined){
let refUser = Libs.ReferralLib.currentUser.attractedByUser()
if (refUser){
  var balanceref = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balanceref.add(20000) // enter refer amount here and change below line as per your coin and amount
  Bot.sendMessageToChatWithId(refUser.chatId, "💲 You Earned +20000 WHXC \n\n*👨‍💼Your Referral :* "+"["+user.username+"]" + "(" + "tg://user?id=" + user.telegramid + ")")
User.setProperty("referbonus", user.telegramid, "integer")}
}

var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("💵 Balance 💵,🎁 Bonus 🎁,\n🏖 Refferal,↗️Withdraw↗️,\n⚙️ Set wallet ⚙️,📊 Statistics 📊,\n📦Free 20 Btt","Refer And Earn WHXC")
}
if (userstat=="left"){
Bot.runCommand("/start");
}
