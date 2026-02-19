# Project 6 is a basic Node.js website where I created three main pages – Home, About Us, and Contact Us – and implemented manual routing without using any external frameworks like Express.

# In this project, navigation between pages works by modifying the URL in the browser, such as moving from “/” (Home) to “/about” and “/contact”, and the server responds based on the requested path.

# I used Node.js core modules including the built-in http module to create the server and the fs (File System) module to read HTML files dynamically from the system.

# When a user visits a specific route, the server checks the URL and uses fs.readFile() to load the corresponding HTML file (home.html, about.html, or contact.html) and send it as a response.

# If the user enters an unknown route, the server handles it by returning a basic 404 response, demonstrating manual error handling.



# I have also attached screenshots showing the working pages, URL modifications in the browser, and the server running in the terminal to demonstrate the project functionality clearly.


Link 
[ https://drive.google.com/file/d/1UGigNWZMWjsek5lKRqw_kDWlZpAMm9w5/view?usp=drive_link ]
