import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", function message(data) {
    console.log("received: %s", data);

    ws.send(data.toString())
  });

//   const interval = setInterval(() => {
//     ws.send("hello world");
//   }, 1000);

  ws.on("close", () => {
    console.log("Client disconnected");
  });

  ws.onerror = function () {
    console.log("Some Error occurred");
  };
});
