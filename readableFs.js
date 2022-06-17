const fs = require("fs");

const readStream = fs.createReadStream("./anime_dancing.mp4");

readStream.on("data", (chunk) => {
  //   console.log("Little chunk\n", chunk);
});

readStream.on("end", () => {
  console.log("Read stream ended");
});

readStream.on("error", (err) => {
  console.log("An Error has occured");
  console.log(err);
});

let a = process.stdin;
