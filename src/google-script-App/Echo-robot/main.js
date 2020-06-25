function doGet(e){
  return HtmlService.createHtmlOutput("Hello World");
}
 
 
function doPost(e){
  var body = JSON.parse(e.postData.contents);
   
  body.message.chat.id = body.message.chat.id + '';
 
  var payload = mainPayload(body);
  var data = {
    "method": "post",
    "payload": payload
  }
 
  var botapi = ''//your bot api
  var api = 'https://api.telegram.org/bot' + botapi
  UrlFetchApp.fetch(api, data);
}

function mainPayload(body) {
	var payload = {
		"method": "forwardMessage",//方法 method
		"chat_id": body.message.chat.id,//群组 group 
		"from_chat_id": body.message.chat.id,
		"message_id": body.message.message_id
	}
	
	if(body.message.text||body.message.photo||body.message.sticker||body.message.video){
		return payload;//返回 return
	} else {
		payload = {
			"method": "sendMessage",
			"chat_id": body.message.chat.id,
			"text": "对不起无法识别消息\n\nSorry, I can't recognize the message"
		}
	return payload;
	}
	
}
