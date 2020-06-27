# Google script App绑定 Telegrambot 教程

找 [@botfather](https://telegram.me/botfather) 输入 **/token** 命令然后选择机器人获取机器人的 API token 

---

然后在 **Google** 里搜索 **Google script App** 打开网站，点击开始（是英文的），然后登录账号，然后点击三条横，点击新建项目。

---

在里面输入 [代码](https://raw.githubusercontent.com/lihai2333/Telegram-bot/master/src/google-script-App/Echo-robot/main.js) **(切记gs文件中必须是空的，如果里面默认有代码请先删掉再放入由我维护的代码)**

---

然后点击发布，再点击部署为网络应用，版本一定要是新建，每次发布都是要新建，然后点击发布，可能会显示网站不安全或者不受信任，那么可以强行登录上账号，点击高级再点击访问xxx（你的项目名字），再选择一个Google账号登陆就好了。

---

接下来Google会给你一个测试链接点击以后如果看见里面是 Hello,World 时说明你这个程序很正常。

---

在测试链接的上面还有一个链接，把它复制全，然 后Google 编码工具，把链接放进去，然后编码，复制编码后的链接（不要直接访问）。这步可是省略，但是推荐进行这一步。

---

你在前面不是获取了一个 API token 吗？它在这时候派上用场了：

https://api.telegram.org/bot你从botfather那里获取的APItoken/setWebhook?url=你的Google scriptApp编码后的链接&max_connections=telegram发送发送频率，值在1~100，默认是40，可以去掉  这个链接不要直接点。

---

更具需求填好之后点击你填好的链接就绑定成功了。
