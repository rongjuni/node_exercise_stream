const { createServer } = require("http");
const { createReadStream, createWriteStream } = require("fs");
// const path = require("path");
const { join } = require("path");

const port = 4000;

const server = createServer((req, res) => {
  const { url, method } = req;

  if (url === "/" && method === "GET") {
    res.setHeader("Content-Type", "text/html");
    const readStream = createReadStream(join(__dirname, "./pokemon.json"));
    readStream.pipe(res);
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    const readStream = createReadStream(join(__dirname, "./notFound404.html"));
    readStream.pipe(res);
  }
});

server.listen(port, () => {
  console.log("Server Listening " + port + " ...");
});
