/*CMD
  command: /mart
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [{ title: "â Dá´É´á´", command: "join" }]
Bot.sendInlineKeyboard(
  button,
  "*ð Join Our All Channels:\nâââââââââââ\n@cyptoftw69\n@BotLootersOfficial\n@legit_bsc_projects\n@City_looters\n@LegitAirdrops010\n@Legit_Bots_Updater\n@EarningRocket\n@AirdropsEagle\nâââââââââââ\nðJoin Payment Channel @FTWPayouts*",{disable_web_page_preview: "true"}
)

var user_link = Libs.commonLib.getLinkFor(user)

function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*âYou're Trying To Invite You're Self *")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  Bot.sendMessageToChatWithId(
    refUser.chatId,
    "*ð¥ Ná´á´¡ Rá´Òá´ÊÊá´Ê - *" +user_link+"*\nReward only if user joins our channels!*"
  )
}

function doAlreadyAttracted() {
  Bot.sendMessage("*ð¥³You Already Started The Bot *")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)
var welco = User.getProperty("welco")
if (welco == undefined) {
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)
Bot.sendMessageToChatWithId(1724473563, "*ð¦NEW USER ALERTð¦\n\nðName: *"+user_link+"*\n\nâ¨ï¸ID: "+user.telegramid+"*")}
//enter your user id get it from reose bot by sending /info 

  User.setProperty("welco", user.telegramid, "text")
var button = [{ title: "â Dá´É´á´", command: "join" }]
Bot.sendInlineKeyboard(
  button,
  "*ð Join Our All Channels:\nâââââââââââ\n@cyptoftw69\n@BotLootersOfficial\n@legit_bsc_projects\n@City_looters\n@LegitAirdrops010\n@Legit_Bots_Updater\n@EarningRocket\n@AirdropsEagle\nâââââââââââ\nðJoin Payment Channel @FTWPayouts*",{disable_web_page_preview: "true"}
)

var user_link = Libs.commonLib.getLinkFor(user)

function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*âYou're Trying To Invite You're Self *")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  Bot.sendMessageToChatWithId(
    refUser.chatId,
    "*ð¥ Ná´á´¡ Rá´Òá´ÊÊá´Ê - *" +user_link+"*\nReward only if user joins our channels!*"
  )
}

function doAlreadyAttracted() {
  Bot.sendMessage("*ð¥³You Already Started The Bot *")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)
var welco = User.getProperty("welco")
if (welco == undefined) {
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)
Bot.sendMessageToChatWithId(1724473563, "*ð¦NEW USER ALERTð¦\n\nðName: *"+user_link+"*\n\nâ¨ï¸ID: "+user.telegramid+"*")}
//enter your user id get it from reose bot by sending /info 

  User.setProperty("welco", user.telegramid, "text")
