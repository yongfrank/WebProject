/*
 * @Author: Frank Chu
 * @Date: 2022-12-19 15:01:38
 * @LastEditors: Frank Chu
 * @LastEditTime: 2022-12-20 06:55:46
 * @FilePath: /WebProject/js/asynchronous.js
 * @Description:
【异步编程: 一次性搞懂 Promise, async, await (#js #javascript)】 https://www.bilibili.com/video/BV1WP4y187Tu
 * 
 * Copyright (c) 2022 by Frank Chu, All Rights Reserved. 
 */
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json => console.log(json))