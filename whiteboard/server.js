/*
 * @Author: Frank Chu
 * @Date: 2022-12-27 22:17:13
 * @LastEditors: Frank Chu
 * @LastEditTime: 2022-12-28 16:20:02
 * @FilePath: /WebProject/whiteboard/server.js
 * @Description: 
【【教程】使用 p5.js 和 Socket.io 制作多人网页白板应用】 https://www.bilibili.com/video/BV1pb411y765/?share_source=copy_web&vd_source=bf4952280cde801b178268abc99a7047
 * 
 * Copyright (c) 2022 by Frank Chu, All Rights Reserved. 
 */

// HTTP
var http = require('http');
var url = require('url');
var path = require('path');

var fs = require('fs');

var server = http.createServer(handleRequest);

server.listen(8080, function() {
    console.log('Server is listening on port 8080');
});

function handleRequest(req, res) {
    var pathname = req.url;

    if(pathname == "/") {
        pathname = "/index.html";
    }

    var ext = path.extname(pathname);

    // Map extension to file type
    var typeExt = {
        ".html": "text/html",
        ".js": "text/javascript",
        ".css": "text/css",
        ".jpg": "image/jpeg",
        ".gif": "image/gif",
        ".png": "image/png"
    };

    var contentType = typeExt[ext] || "text/plain";

    fs.readFile(__dirname + pathname, (err, data) => {
        if(err) {
            res.writeHead(500);
            return res.end('Error loading ' + pathname);
        }

        // Otherwise, send data back
        res.writeHead(200, {'Content-Type': contentType});
        res.end(data);
    })
}

// WebSocket

var io = require('socket.io')(server);

io.sockets.on('connection', (socket) => {
    console.log('New client: ' + socket.id);


    // When user emits
    socket.on('mouse', (data) => {
        console.log('Received: ' + data.x0 + ' ' + data.y0 + ' ' + data.x1 + ' ' + data.y1);
        socket.broadcast.emit('drawing', data);
    });
    
    socket.on('disconnect', () => {
        console.log('Client has disconnected');
    });
})