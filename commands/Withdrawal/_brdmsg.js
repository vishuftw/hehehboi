/*CMD
  command: /brdmsg
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdrawal
  answer: Msg
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == "1724473563"){
  //your telegram id this is at the end of your referral link)
  Bot.setProperty("adminBroadcast", message)
  Bot.runAll({
    command: "adfitch"
  })
  Bot.sendMessage("✅Message sent to all active members")
} else {
 Bot.sendMessage("you are not allowed to use this")
}
