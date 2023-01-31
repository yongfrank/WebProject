var socket;

var current = {

};

function setup() {
  createCanvas(windowWidth, windowHeight);

  // start a socket connection to the server
  socket = io.connect('http://franks-macbook-pro.local:8080');

  socket.on("drawing", (data) => {
    console.log(
        "received: " + data.x0 + ", " + data.y0 + ", " + data.x1 + ", " + data.y1
    );

    line(data.x0 * width, data.y0 * height, data.x1 * width, data.y1 * height);
    });
}

function draw() {

}

function drawLine(x0, y0, x1, y1) {
    line(x0, y0, x1, y1);

    // sending to server
    console.log("sending to server: " + x0 + ", " + y0 + ", " + x1 + ", " + y1);
    socket.emit("mouse", {
        x0: x0 / width, y0: y0 / height,
        x1: x1 / width, y1: y1 / height
    })
}

function mousePressed() {
    current.x = mouseX;
    current.y = mouseY;
}

function mouseDragged() {
    drawLine(current.x, current.y, mouseX, mouseY);
    current.x = mouseX;
    current.y = mouseY;
}

disableScrolling();

function disableScrolling() {
    document.body.style.overflow = 'hidden';
    document.body.userSelect = 'none';
    document.body.webkitUserSelect = 'none';
}

