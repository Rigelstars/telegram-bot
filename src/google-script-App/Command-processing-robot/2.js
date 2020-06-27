
n doGet(e){
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
	//1.js is different from 2.js
	//1.js与2.js不同

	let text = body.message.text;
	let chatId = body.message.chat.id;
	let messageId = body.message.message_id;

	var payload = {
	                "method": "sendMessage",
	                "chat_id": chatId
	        }

	if(text.indexOf('/help' == 0) {
		payload.text = 'github: https://github.com/awesome2333/telegram-bot';
		return payload
	}
