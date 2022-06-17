const fs = require("fs");
const readStream = fs.createReadStream("./anime_dancing.mp4");
const writeStream = fs.createWriteStream("./copy.mp4", {
  highWaterMark: 1628909,
});

readStream.on("data", (chunk) => {
  const result = writeStream.write(chunk);
  if (!result) {
    console.log("Back Pressure");
    readStream.pause();
  }
});

readStream.on("end", () => {
  writeStream.end();
});

writeStream.on("drain", () => {
  console.log("DRAINED!!!!");
  readStream.resume();
});

writeStream.on("close", () => {
  process.stdout.write("file copied \n");
});
