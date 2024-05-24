import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

const clients = [];

wss.on("connection", (ws) => {
  console.log("Client connected");

  clients.push(ws);

  ws.on("message", function message(data) {
    console.log("received: %s", data);

    clients.forEach((wsClient)=> {
        if (ws !== wsClient)
            wsClient.send(data.toString())
    })

    ws.send(data.toString());S
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
