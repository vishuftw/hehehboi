/*CMD
  command: With1ddmggg
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let cur = Bot.getProperty("cur")
let m = Bot.getProperty("m")
let tokenwal = Bot.getProperty("tokenwal")
let hiranwala = Bot.getProperty("hiranwala")
var balance = Libs.ResourcesLib.userRes("balance")
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })
  return
}
var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
  userPayment.add(+message)
if (message < 60000) {
    Bot.sendMessage("_❌ Minimum Withdraw 60,000 WHXC_")
  } else {
    if (message > balance.value()) {
      Bot.sendMessage(
        "_❌ Maximum Withdraw " + balance.value().toFixed(6) + " WHXC_"
      )
    } else {
var add = User.getProperty("TRXwallet")
var amo = parseInt(message)
User.setProperty("amo", amo, "string")
var tokenid = "1003815"

HTTP.post({
  url: "https://whxcthebossvishugg.herokuapp.com/post",
  success: "/onLoadingddola",
  body: { address: add, amount: amo, tokenid: tokenid }
})

balance.add(-amo)
}}
