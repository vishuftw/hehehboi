/*CMD
  command: check4
  help: 
  need_reply: 
  auto_retry_time: 
  folder: join
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.runCommand("main_menu")
User.addToGroup("user")
}

if (user=="left"){
Bot.sendMessage("*❌ Must join all channel ❌ *")
}
