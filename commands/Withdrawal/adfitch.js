/*CMD
  command: adfitch
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Withdrawal

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var msg = Bot.getProperty("adminBroadcast")
Bot.sendMessage("*#Broadcast*\n" + msg)
