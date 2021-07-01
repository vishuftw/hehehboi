/*CMD
  command: clnbot69
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Id
  keyboard: 
  aliases: 
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid == ""+admin+""){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done!!")
} else {
Api.sendMessage({text :"❌You Are Not Admin"})
}
