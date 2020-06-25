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


}
