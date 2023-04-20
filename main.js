import { socket } from './socket';
import './styles/global.css';
 
let holdTimeout;

const btn = document.getElementById("col");
const btn1 = document.getElementById("press1");
const btn2 = document.getElementById("press2");
const btn3 = document.getElementById("press3");
const btn4 = document.getElementById("press4");
const btn5 = document.getElementById("press5");
const btn6 = document.getElementById("press6");

socket.on('connect', () => {
  console.log('Connected to server');
});
btn.addEventListener("mousedown", function () {
  // Start a timeout after 1 second (adjust as needed)
  holdTimeout = setTimeout(function () {
    socket.emit("led-on1");
    socket.emit("led-on2");
    socket.emit("led-on3");

    console.log("Button held!");
    // Add your desired action here
  }, 100);
});
btn.addEventListener("mouseup", function () {
  // Clear the timeout if button is released before timeout
  clearTimeout(holdTimeout);
  socket.emit("led-off1");
  socket.emit("led-off2");
  socket.emit("led-off3");

});

btn1.addEventListener("click", () => {
   socket.emit("led-on1");
  
 })
 btn2.addEventListener("click", () => {
   socket.emit("led-off1");

 })
 btn3.addEventListener("click", () => {
    socket.emit("led-on2");
  })
   btn4.addEventListener("click", () => {
     socket.emit("led-off2");

 })
  btn5.addEventListener("click", () => {
    socket.emit("led-on3");
  
  })
   btn6.addEventListener("click", () => {
    socket.emit("led-off3");

 })
