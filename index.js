// // 导入http模块
// const http = Request('http'); 
// const path = Request('path');
// const fs = Request('fs');
// // 创建web服务实例
// const server = http.createServer();
// // 监听request请求
// server.on("request" , (req,res)=>{
//     //获取请求地址
//     let pathname = req.url;
//     // 对"/"做处理
//     pathname = pathname === '/' ? "/index.html" : pathname
//     // 图标的处理
//     let filename = path.join(__dirname , "public" , pathname)
//     // 读取文件并输出
//     fs.readFile(filename , (err,data)=>{
//         if(err){
//             // 读取文件错误
//             res.statusCode = 500
//             res.end("server internal error.")
//         }else{
//             // 读取文件成功
//             res.end(data)
//         }

//     })

// })
// // 启动服务
// server.listen(8080,()=>{
//     console.log("server is running at http://127.0.0.1:8080");
// });




// // 导入http模块
// const http = require('http');
// const fs = require('fs');
// // const url = require('url');
// const path = require('path');
// // const os = require('os');
// // 创建web服务实例
// const server = http.createServer();
// // 监听request请求
// server.on("request" , (req,res)=>{
// // 获取请求地址
// let pathname = req.url;
// // 对"/"做处理
// pathname = pathname === '/' ? '/index.html' : pathname;
// // 图标的处理
// if(pathname !== "/favicon.ico"){
// //请求静态地址
// let filepath = path.join(__dirname,pathname)
// // 读取文件并输出
// fs.readFile(filepath , (err,data)=>{
//     if(err){
//         res.statusCode = 500;
//         res.end('server internal error.')
//     }else{
//         res.end(data)
//     }
// })
// }
// })
// // 启动服务
// server.listen(8080 , ()=>{
//     console.log("server is running at http://127.0.0.1:8080");
// })





// 导入express模块
const express = require('express');
// 创建web服务实例对象
const app = express();
// 监听post请求
app.get("/",(req,res)=>{
    res.send("hello world");
})
// 用户访问index时候输出哈哈哈
app.get("/index.html",(req,res)=>{
    res.send("哈哈哈")
})
// 用于通过post方式访问/post则输出post
app.post("/post",(req,res)=>{
    res.send("我是post啦啦啦");
})
// 启动服务
app.listen(8080,()=>{
    console.log("server is running at http://127.0.0.1:8080");
})
