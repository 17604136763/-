// 导入querystring模块
const fs = require('fs');
// 定义中间件（本质就是一个函数）
const csBodyParse = (req,res,next) =>{
    let str = '';
    // ip地址
    str = req.ip;
    // 访问时间
    let date = new Date();
    str += '/' + `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    // 访问地址
    str +="/" + req.url;
    // 访问方式
    str += "/" + req.method;
    // 浏览器版本信息
    str += '/' + req.headers['user-agent'] + `\r`;

    fs.appendFile(`./logs/${date.getFullYear()}-${date.getMonth()}-${date.getDate()}.log` , str , err =>{})
    next();
}

// 导出
module.exports = csBodyParse;