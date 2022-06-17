const fs = require("fs");
const readStream = fs.createReadStream("./anime_dancing.mp4");
const writeStream = fs.createWriteStream("./copy.mp4");

readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});

readStream.on("end", () => {
  writeStream.end();
});

writeStream.on("close", () => {
  process.stdout.write("file copied \n");
});
