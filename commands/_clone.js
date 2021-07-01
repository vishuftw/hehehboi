/*CMD
  command: /clone
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send email id
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == 1724473563){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done")
}else{
Bot.sendMessage("Not admin")
}

