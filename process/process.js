var data = JSON.parse(content)
var c = data.caption
var vc = data.captions

var video = data.video
var image = data.image
var id = data.id
var msg = data.msg
if (vc) {
  Api.sendVideo({ chat_id: id, video: video })
}
if (video) {
  Api.sendVideo({
    chat_id: id,
    video: video,
    caption: vc,
    parse_mode: "HTML"
  })

  return
}
if (c) {
  Api.sendPhoto({
    chat_id: data.id,
    photo: data.image,
    caption: c,
    parse_mode: "HTML"
  })
  return
}

if (image) {
  Api.sendPhoto({ chat_id: id, photo: image })

  return
}

Bot.sendMessage(data.ktp)
