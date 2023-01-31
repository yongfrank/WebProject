/*
 * @Author: Frank Chu
 * @Date: 2023-01-09 23:57:52
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-10 00:10:23
 * @FilePath: /WebProject/MVC/backend/app.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */

// 引入express, require 的意思是
const express = require('express');
const app = express();

// {} 的意思是解构赋值，join 的意思是拼接路径
const { join } = require('path');

// set 是设置属性的意思，这里设置的是模板引擎，ejs 是的作用是将模板转换成html
app.set('view engine', 'ejs');
app.use(express.static(join(__dirname, 'public')));

app.listen(8080, listenCallback)

function listenCallback() {
    console.log('Server is running at http://localhost:8080');
}