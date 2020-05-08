// npm init -y
// 引入express
var express = require("express");
var app = express();
//设置允许跨域访问该服务 在vue使用就是会有跨域问题
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });
// req 客户端向服务器数据响应
// res 服务器向客户端数据响应
// get 请求
// post 请求
//- --------------
// 在服务器中定义变量，重启服务会被初始化
var userList = [] //全局对象

app.get("/login",function(req,res){
    console.log(req.query);
    let {username,password} = req.query;
    if(username == "" && password == ""){
        res.send("用户名或密码错误")
        return;// 终止操作
    }
    //1. 通过前台传递登录信息
    //2. 使用前台登录用户名, 在后台中userList匹配相同用户名密码, 找到登录成功，找不到登录失败
    // 使用前台用户找userlist 对象数据，对比密码
    let data = userList.find(item => item.username == username) // 返回对象
    console.log("返回对象",data);

    if(data.password == password && data.username == username){
        res.send("登录成功");
    }else{
        res.send("登录失败")
    }
})

app.get('/register',function(req,res){
    console.log(req.query)
    let {username,password,password2} = req.query;
    if(username != "" && password == password2 && password != ""){
        console.log("注册成功")
        userList.push({username,password})
        res.send("注册成功")
    }else{
        console.log("注册失败")
        res.send("注册失败")
    }
})
app.listen(3000,"127.0.0.1",() => {
    // 通过访问此路径获取接口数据
    console.log("请访问:http://127.0.0.1")
})