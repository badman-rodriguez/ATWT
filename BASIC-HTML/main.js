// Functions

function add(num1, num2) {
    return num1 + num2;
}

// Canvas

var canvas = document.getElementById("canvas-thing");
var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 80, 80); 