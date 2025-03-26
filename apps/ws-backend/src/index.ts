import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8081 });

wss.on("connection", (ws) => {
  console.log("Connected to websocket sever");

  ws.on("message", (event) => {
    console.log(event.toString());
    ws.send("pong");
  });
});
