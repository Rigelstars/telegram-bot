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
	let text = body.message.text;
	let chatId = body.message.chat.id;
	let messageId = body.message.message_id;
	
	var payload = {
		"method": "sendMessage",
		"chat_id": chatId
	}

	if (text == '/start') {
		payload.text = "本机器人是开源机器人\n\nThis robot is an open source machie people";
		return payload;
	}

}
