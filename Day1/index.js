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

import { error } from "console";
import fs from "fs";

fs.readFile("fs.txt", "utf-8", (error, resolve) => {
  if (error) throw error;

  console.log(" the document", resolve);
});

// fs.appendFile("fs.txt", "utf-8", (error) => {
//   if (error) {
//     console.log(error);
//   } else console.log(" the new file is ", fs.readFile("fs.txt", " utf-8"));
// });
// Node.js program to demonstrate the
// fs.appendFile() method

// // Import the filesystem module
// import { error } from "console";
// import fs from "fs";
// import { resolve } from "path";

// fs.readFile("fs.tzt", "utf-8", (error, resolve) => {
//   if (error) throw error;
//   console.log(" the fs text elemnts are", resolve);
// });
