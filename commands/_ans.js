/*CMD
  command: /ans
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var userAns = params

if(request.data){
var messageid = request.message.messageid
var chatid = request.message.chat.id

Api.deleteMessage({
chatid :  chatid,
messageid : messageid
})

}

if(!params){
return 
}else{
let ans = User.getProperty('userAns')

if(userAns==ans){
Api.answerCallbackQuery({
  callbackqueryid: request.id,
  text: "That Correct",
  showalert: false
})

Bot.sendMessage('🎉 Congratulations, You are Verified')
Bot.runCommand("main_menu")
}else{
Api.answerCallbackQuery({
  callbackqueryid: request.id, 
  text: "That Wrong",
  showalert: false
})



var button = [[{ title: "🔄 Try Again ", command: "main_menu119tyu" }]]
Bot.sendInlineKeyboard(button,"*❌ You Are Not Verified You Selected Wrong Emoji Try again*")
if (request.data){
Api.deleteMessage({
chatid:request.message.chatid,
messageid:request.message.messageid})
}
}
}
