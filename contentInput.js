if (request.video) {
  var us = Bot.getProperty("broadcasting", { list: {} })
  var msg = message
  for (var i in us.list) {
    var ase = us.list[i].user_id
    var id = us.list[i].user_tg

    var url = Libs.Webhooks.getUrlFor({
      command: "/process",
      user_id: ase
    })
    HTTP.post({
      url: url,
      body: {
        msg: msg,
        captions: request.caption,
        video: request.video.file_id,
        id: id
      }
    })
  }

  return
}

if (request.photo[0]) {
  
var key = Bot.getProperty("admin_chat")

var us = Bot.getProperty("broadcasting", { list: {} })
var msg = message
for (var i in us.list) {
  var ase = us.list[i].user_id
  var id = us.list[i].user_tg

  var url = Libs.Webhooks.getUrlFor({
    command: "/process",
    user_id: ase
  })
  HTTP.post({
    url: url,
    body: {
      msg: msg,
      caption: request.caption,
      image: request.photo[0].file_id,
      id: id
    }
  })
}
return
}

var key = Bot.getProperty("admin_chat")

  var us = Bot.getProperty("broadcasting", { list: {} })
  var msg = message
  for (var i in us.list) {
    var ase = us.list[i].user_id
    var url = Libs.Webhooks.getUrlFor({
      command: "/process",
      user_id: ase
    })
    HTTP.post({
      url: url,
      body: {
        ktp: msg
      }
    })
}
