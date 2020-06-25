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

	if (body.message.text) {//判断是否是文本 Is the judgment text
		var payload = {
			"method": "forwardMessage",//方法 method
			"chat_id": body.message.chat.id,//群组 group 
			"from_chat_id": body.message.chat.id,
			"message_id": body.message.message_id
		}
	return payload;//返回 return
	}

}
