function doGet(e){
  return HtmlService.createHtmlOutput("There's no problem with this program");
}
 
 
function doPost(e){
  var body = JSON.parse(e.postData.contents);
   
  body.message.chat.id = body.message.chat.id + '';//一些处理
 //Some processing
 
  var payload = mainPayload(body);
  var data = {
    "method": "post",
    "payload": payload
  }
   
  var api = ''//在''里放你的机器人API 
              //Put your robot API in ''
 var api1 = 'https://api.telegram.org/bot' + api; 
  UrlFetchApp.fetch(api, data);
}

function mainPayload(body) {

	if (body.message.text) {//判断是否是文本 Is the judgment text
		var payload = {
			"method": "sendMessage",//方法 method
			"chat_id": body.message.chat.id,//群组 group 
			"text": ''//内容 content
}
	return payload;
}

}
