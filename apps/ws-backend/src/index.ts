import { WebSocketServer } from "ws";
import jwt from "jsonwebtoken";

const wss = new WebSocketServer({ port: 8081 });
const JWT_SECRET =
  (process.env.JWT_SECRET as string) || "123456789101112131415161718192021";

wss.on("connection", (ws, request) => {
  console.log("Connected to websocket sever");
  const url = request.url;
  if (!url) {
    return;
  }
  const queryParams = new URLSearchParams(url.split("?")[1]);
  const token = queryParams.get("token");
  const decode = jwt.verify(token as string, JWT_SECRET) as { id: string };

  if (!decode || !decode.id) {
    ws.close();
  }

  const userId = decode.id;

  ws.on("message", (event) => {
    console.log(event.toString());
    ws.send("pong");
  });
});
