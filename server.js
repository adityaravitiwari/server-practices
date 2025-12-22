const http = require("http");
const path = require("path");
const serveFile = require("./utils/File.js");





// Define the port
const PORT = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {




  // 2️⃣ Home page route
if (req.url === "/" || req.url === "/home") {
    serveFile(
      res,
      path.join(__dirname, "pages", "home.html"),
      "text/html",
      200
    );
  }


  else if (req.url === "/about") {
    serveFile(
      res,
      path.join(__dirname, "pages", "about.html"),
      "text/html",
      200
    );
  }

  // 4️⃣ Contact page route
  else if (req.url === "/contact") {
    serveFile(
      res,
      path.join(__dirname, "pages", "contact.html"),
      "text/html",
      200
    );
  }

  // 5️⃣ 404 – Invalid route
  else {
    serveFile(
      res,
      path.join(__dirname, "pages", "404.html"),
      "text/html",
      404
    );
  }
});

// Start listening on the port
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
