const fs = require("fs");

var http = require("http");

var file = "./anime_dancing.mp4";

http
  .createServer((req, res) => {
    fs.readFile(file, (error, data) => {
      if (error) {
        console.log("hmmm: ", error);
      }
      res.writeHead(200, { "Content-Type": "video/mp4" });
      res.end(data);
    });
  })
  .listen(3000, () => console.log("Buffer - http://localhost:3000"));
