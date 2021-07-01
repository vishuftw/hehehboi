/*CMD
  command: msg68
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Instant withdraw
  answer: message sent check channel @FTWPayouts
  keyboard: 
  aliases: 
CMD*/

Api.sendMessage({
  chat_id: "@FTWPayouts",
  text:
  " *Join Our Channel For Best Bot Loots\nlinks below\nUnmute Our Channel And pin to top\nAll Legit And Real Bots*",parse_mode:"Markdown",reply_markup: { inline_keyboard: [
[
{ text: "💠 Main Channel ", url: "https://t.me/BotLootersOfficial"}, {text: "💠2nd Channel", url: "https://t.me/cyptoftw69"} ]]},disable_web_page_preview: true
})

