/*CMD
  command: ↗️Withdraw↗️
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(user.telegramid)
let wdinfo = Bot.getProperty("wdInfo")
if (!stat) {
  
  let balance = Libs.ResourcesLib.userRes("balance")
  let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
  var wallet = User.getProperty("TRXwallet")
  if (wallet == undefined) {
    Bot.sendMessage("_❌ wallet Not set_")
  } else {
    if (balance.value() < 60000) {
      Bot.sendMessage("_❌ You have to own at least 60,000 WHXC!_")
    } else {
      Bot.sendMessage("*📤 Enter Amount of WHXC*")
      Bot.runCommand("With1ddmggg")
    }
  }

}else{Bot.sendMessage("*You're Ban you can withdraw only if Balance up then 1000k trxtweet because i lost my all energy to make transactions*")
return
}
