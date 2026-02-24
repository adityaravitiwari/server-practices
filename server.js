const http = require("http");
const path = require("path");
const serveFile = require("./utils/File.js");


// This server that serve with http responses


// Define the port
const PORT = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  //  Home page 
if (req.url === "/" || req.url === "/home"){
    serveFile(
      res, path.join(__dirname, "pages", "home.html"),
      "text/html",200);}
      //about page
else if (req.url === "/about") {
    serveFile(res,path.join(__dirname, "pages", "about.html"),
      "text/html", 200
    );
  }
  // Contact page route
  else if (req.url === "/contact") {
    serveFile(res,path.join(__dirname, "pages", "contact.html"),"text/html",
      200
    );
  }

  //404 – Invalid route
  else {serveFile(
      res,path.join(__dirname, "pages", "404.html"),"text/html",
      404
    );
  }
});

// Start listening on the port
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
/* Here Not Ai not used here . 
i just created A server js file where i used http tool to create a server and path to join the path 
of the file and serveFile to read the file and send it to the client . 
here i take req and res as parameter to get the request from client and
 send response to client , 200 status code is for succes and 404 for not found */