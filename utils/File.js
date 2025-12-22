const fs = require("fs");

const serveFile = (res, filePath, contentType, statusCode = 200) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(statusCode, { "Content-Type": contentType });
      res.end(data);
    }
  });
};

module.exports = serveFile;
