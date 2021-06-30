var mouseEvent="empty";
var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
var color="turquoise";
var line_width = 3;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color_input").value;
    line_width = document.getElementById("line_width_input").value;
    mouseEvent="mouseDown";
    
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    var current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
    var current_position_of_mouse_y = e.clientY-canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
       
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
ctx.beginPath();
    ctx.lineWidth=line_width;
    ctx.strokeStyle=color;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();
    }
}