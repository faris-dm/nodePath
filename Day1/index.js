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
import fs, { read } from "fs";
import { resolve } from "path";
import http from "http";
import { application, json } from "express";
import { LogOut } from "lucide-react";
// const http = require('http');

const Router = http.createServer((req, res) => {
  const ShowDate = new Date();
  console.log(` ${ShowDate} ${req.method} ${req.url}`);

  res.setHeader("Content-Type", "application/json");

  if (req.url == "/") {
    res.statusCode = 200;
    res.end(
      JSON.stringify({
        Home: "Wellcome to the landing page  where Dreams come true",
      })
    );
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end(JSON.stringify({ about: " this is  the dream of the   the page" }));
  } else if (req.url == "/exit") {
    res.statusCode = 200;
    res.end(JSON.stringify({ exit: "no one  can get out of the   the page" }));
  } else if (req.url == "/shout") {
    res.statusCode = 200;
    res.end(JSON.stringify({ shout: " this is  the dream of the   the page" }));
    Router.close(() => {
      console.log("close the page");
    });
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ Page: "Not found" }));
  }
});

// Read port from environment variable or use default
const PORT = process.env.PORT || 5000;

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
