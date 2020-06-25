function mainPayload(body) {

	if (body.message.text) {//判断是否是文本 Is the judgment text
		var payload = {
			"method": "sendMessage",//方法 method
			"chat_id": body.message.chat.id,//群组 group 
			"text": ''//内容 content
		}
	return payload;//返回 return
	}

}
