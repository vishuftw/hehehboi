/*CMD
  command: task1join
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *๐Send the Screenshot, your screenshot wil be forwarded to our admins, they will check and reward you*
  keyboard: 
  aliases: 
CMD*/

let pic = request.photo[0]
let admin = Bot.getProperty("1891485685")
Bot.setProperty("Ask")
User.getProperty("Caption")
Bot.sendMessage("*๐ฉ Image Sent To Admins*")
Api.sendPhoto({ chat_id: 1891485685, photo: pic.file_id })

Bot.sendMessageToChatWithId(1891485685,"*๐ฅ New Pic From User\n\n๐ง๐ปโ๐ป User =*  ["+user.first_name+"](tg://user?id="+user.telegramid+")\n\n\*๐ฎ His Telegram Id :* "+user.telegramid +"\n\n*๐ฎ His Username :* *@"+user.username+"*")
