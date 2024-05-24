import { WebSocket } from "ws";

const ws = new WebSocket("ws://localhost:8080");
const clientID = Math.floor(Math.random() * 100); 

ws.on("open", function open() {
 
 ws.on("message", function message(data) {
   console.log(`${data}`);
   ws.send(`Hello Server from ${clientID}`);
 });

});
