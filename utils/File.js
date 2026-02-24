const fs = require("fs");

const serveFile = (res, fPath, contentType,status=200) =>
   {
  fs.readFile(fPath, (err, data) =>
     {
    if (err) {
      res.writeHead(500);
      return res.end(" Error");} 
    else {res.writeHead(status);
       return res.end(data);}
  });
};

module.exports = serveFile;

/* Here Not Ai not used here .

i just created A file js where i used express  tool (Fs) to read   and write in The file . 
here i take res , and filepath to add and get from respected file , 200 status code is for succes and 500 for eror ;



*/






