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

var button = [{ title: "✅ Dᴏɴᴇ", command: "join" }]
Bot.sendInlineKeyboard(
  button,
  "*🔎 Join Our All Channels:\n➖➖➖➖➖➖➖➖➖➖➖\n@cyptoftw69\n@BotLootersOfficial\n@legit_bsc_projects\n@City_looters\n@LegitAirdrops010\n@Legit_Bots_Updater\n@EarningRocket\n@AirdropsEagle\n➖➖➖➖➖➖➖➖➖➖➖\n🚀Join Payment Channel @FTWPayouts*",{disable_web_page_preview: "true"}
)

var user_link = Libs.commonLib.getLinkFor(user)

function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*❌You're Trying To Invite You're Self *")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  Bot.sendMessageToChatWithId(
    refUser.chatId,
    "*💥 Nᴇᴡ Rᴇғᴇʀʀᴀʟ - *" +user_link+"*\nReward only if user joins our channels!*"
  )
}

function doAlreadyAttracted() {
  Bot.sendMessage("*🥳You Already Started The Bot *")
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
Bot.sendMessageToChatWithId(1724473563, "*🚦NEW USER ALERT🚦\n\n🔍Name: *"+user_link+"*\n\n♨️ID: "+user.telegramid+"*")}
//enter your user id get it from reose bot by sending /info 

  User.setProperty("welco", user.telegramid, "text")
var button = [{ title: "✅ Dᴏɴᴇ", command: "join" }]
Bot.sendInlineKeyboard(
  button,
  "*🔎 Join Our All Channels:\n➖➖➖➖➖➖➖➖➖➖➖\n@cyptoftw69\n@BotLootersOfficial\n@legit_bsc_projects\n@City_looters\n@LegitAirdrops010\n@Legit_Bots_Updater\n@EarningRocket\n@AirdropsEagle\n➖➖➖➖➖➖➖➖➖➖➖\n🚀Join Payment Channel @FTWPayouts*",{disable_web_page_preview: "true"}
)

var user_link = Libs.commonLib.getLinkFor(user)

function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*❌You're Trying To Invite You're Self *")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  Bot.sendMessageToChatWithId(
    refUser.chatId,
    "*💥 Nᴇᴡ Rᴇғᴇʀʀᴀʟ - *" +user_link+"*\nReward only if user joins our channels!*"
  )
}

function doAlreadyAttracted() {
  Bot.sendMessage("*🥳You Already Started The Bot *")
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
Bot.sendMessageToChatWithId(1724473563, "*🚦NEW USER ALERT🚦\n\n🔍Name: *"+user_link+"*\n\n♨️ID: "+user.telegramid+"*")}
//enter your user id get it from reose bot by sending /info 

  User.setProperty("welco", user.telegramid, "text")
