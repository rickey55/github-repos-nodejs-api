const express = require('express');
const axios = require('axios');
var path = require('path');
var ejs = require('ejs');
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5001;
var testAPIRouter = require("./api/routes/testAPI");

app.use(cors());
// 連接 React 的 static file
app.use(express.static(path.join(__dirname, "client/public")));

app.get('/api', function (req, res) {
  res.send('okkkkkk');
})

// 新增接口路由
app.get('/data/:module', function (req, res, next) {
	var c_path = req.params.module;
	var Action = require('./server/action/data/' + c_path);
	Action.execute(req, res);
});
app.use("/testAPI", testAPIRouter);

app.get("/", function (req, res) {
  // 回應 React 的 index 頁面
  res.sendFile(path.join(__dirname, "client/public/index.html"));
  //res.render('index');
  //res.send("hello world");
});
// 对所有(/)URL或路由返回index.html 
// app.get('/', function (req, res) {
// 	res.render('index');
// });

// 设置views路径和模板
app.set('views', './client/view');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// app.use配置
app.use('/client/static', express.static(path.join(__dirname, 'client/static')));


var server = app.listen(PORT, () => {
  var host = server.address().address;
	var port = server.address().port;
	console.log('Listening at http://%s:%s', host, port);
  console.log(`server started on port ${PORT}`);
});
