// import http from "http";

// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "text/plain" });
//   res.end("hellow world Node  with Ai Mentor");
// });

// app.listen(3000, () => {
//   console.log(` server running at https://localhost:3000`);
// });

// // Task Two

// import { error } from "console";
// import fs from "fs";

// fs.readFile("./day_1.txt", "utf-8", (error, resolve) => {
//   if (error) throw error;
//   console.log(` the file is being read  and it is`, resolve.substring(0, 500));
// });

// async Mindset

// console.log(` it start Now`);

// setTimeout(() => {
//   console.log(` it is 2nd statment`);
// }, 3000);

// console.log(`  this  is 3rd statment`);

//appendFile

// import { error } from "console";
// import fs from "fs";

// fs.readFile("fs.txt", "utf-8", (error, resolve) => {
//   if (error) throw error;

//   console.log(" the document", resolve);
// });

// fs.appendFile("fs.txt", "utf-8", (error) => {
//   if (error) {
//     console.log(error);
//   } else console.log(" the new file is ", fs.readFile("fs.txt", " utf-8"));
// });
// Node.js program to demonstrate the
// fs.appendFile() method

// Import the filesystem module

import { error } from "console";
import fs from "fs";
import { resolve } from "path";
import http from "http";
import { json } from "express";
import { LogOut } from "lucide-react";
// const http = require('http');

const Router = http.createServer((req, res) => {
  const Now = new Date();
  console.log(` ${Now} -- ${req.method} --${req.url}`);

  res.setHeader("Content-Type", "application/json");

  if (req.url == "/") {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: "Wellcome  to Landing page, solo" }));
  } else if (req.url == "/Home") {
    res.statusCode = 200;
    res.end(JSON.stringify({ Message: "wellcome to your Home solo" }));
  } else if (req.url == "/contact") {
    res.statusCode = 200;
    res.end(
      JSON.stringify({
        Contact: "Contacts are Now contacting  so Pleases wait",
      })
    );
  } else if (req.url == LogOut) {
    res.statusCode == 200;
    res.end(JSON.stringify({ No: "There is NO going Out" }));
  } else {
    req.statusCode = 404;
    res.end(JSON.stringify({ Message: "Page Not Fond" }));
  }
});
// Create a server
// const server = http.createServer((req, res) => {
//   // Log request with timestamp
//   const timestamp = new Date();
//   console.log(`${timestamp} - ${req.method} ${req.url}`);

//   // Set response header
//   res.setHeader("Content-Type", "application/json");

//   // Route handling
//   if (req.url === "/") {
//     res.statusCode = 200;
//     res.end(JSON.stringify({ message: "Welcome to the home page!" }));
//   } else if (req.url === "/api") {
//     res.statusCode = 200;
//     res.end(JSON.stringify({ data: { users: [1, 2, 3] } }));
//   } else if (req.url === "/about") {
//     res.statusCode = 200;
//     res.end(JSON.stringify({ message: "About page" }));
//   } else {
//     // 404
//     res.statusCode = 404;
//     res.end(JSON.stringify({ error: "Not found" }));
//   }
// });

// Read port from environment variable or use default
const PORT = process.env.PORT || 3000;

Router.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// console.log(
//   " the content of the file befor",
//   fs.readFileSync("fs.txt", "utf-8")
// );

// console.log(" the content  of the file after chamge");

// fs.appendFile("fs.txt", " this is new appens", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file cahnged to", fs.readFileSync("fs.txt", "utf-8"));
//   }
// // });

//################## another function

// console.log("read file frist:", fs.readFileSync("fs.txt", "utf-8"));

// fs.appendFile(
//   "fs.txt",
//   " and i will prove  to my self i deserive a better life",
//   (error) => {
//     if (error) throw error;
//     console.log(" the new  file is:-", fs.readFileSync("fs.txt", "utf-8"));
//   }
// );

//################## another function
