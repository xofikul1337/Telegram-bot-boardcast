var us = Bot.getProperty("broadcasting", { list: {} })
if (!us.list[user.telegramid]) {
  us.list[user.telegramid] = { user_id: user.id, user_tg: user.telegramid }
  Bot.setProperty("broadcasting", us, "json")
}
