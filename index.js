const http = require("http");
const url = require("url");

const users = [
  { name: "Lautaro", surname: "Andreani", id: 1 },
  { name: "Juani", surname: "Gallo", id: 2 },
  { name: "Gonza", surname: "Morandi", id: 3 },
];

const requestListener = (req, res) => {
  const route = "/api/users";
  res.setHeader("Content-Type", "application/json");

  if (req.url == "/ping") {
    res.writeHead(200);
    res.end("pong");
  } else if (req.url == route) {
    res.writeHead(200);
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(404);
    res.end("Ruta no encontrada");
  }
};

const server = http.createServer(requestListener);
const port = 3000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server is up and running in ${host}:${port}`);
});
