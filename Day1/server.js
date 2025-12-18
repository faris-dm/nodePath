import { error } from "console";
import { fileLoader } from "ejs";
import { json } from "express";
import fs, { readFile, readFileSync } from "fs";

// console.log(" the privious file:-", fs.readFileSync("fs.txt", "utf-8"));

// fs.appendFile("fs.txt", "solo is wrote", (error, data) => {
//   if (error) throw error;
//   console.log(" the new file:", fs.readFileSync("fs.txt", "utf-8"));
// });

// console.log(" reading the file", fs.readFileSync("fs.txt", "utf-8"));
// fs.appendFile("fs.txt", "and i will change  them to wins", (error) => {
//   if (error) throw error;
//   console.log(fs.readFileSync("fs.txt", "utf-8"));
// });
// import fs from "fs";

// This file exists
// const file = "fs.txt";

// const ErrorFirstCallback = (err, data) => {
//   if (err) throw err;

//   console.log("Function successfully executed:", data.toString());
// };

// fs.readFile(file, ErrorFirstCallback);import { unlink } from 'node:fs/promises';

// const file = "fs.txt";

// fs.appendFileSync(file, "\n You are Gc Pleases Work Hard");

// const out = fs.readFileSync(file, "utf-8");
// console.log(" this is a file", out.toString());
const file = "fs.txt";

import http from "http";
const Router = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  // const HttpDate = new Date();
  // console.log(`${HttpDate}  ${req.method} ${req.url}`);
  if (req.url == "/") {
    res.statusCode = 200;
    res.end(JSON.stringify({ Message: "Landing Page" }));
    fs.appendFileSync(file, "\n go to Landing page");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    const messages = new Date();
    fs.appendFileSync(file, `\n ${messages}  open about`);
    res.end(JSON.stringify({ router: "ABOUT ME PAGE " }));
  } else if (req.url == "/product") {
    res.statusCode = 200;
    res.end(JSON.stringify({ Message: "Landing Page" }));
    fs.appendFileSync(file, "\n go to Product page");
  } else if (req.url === "/close") {
    res.statusCode = 200;
    fs.appendFileSync(file, "\n  server Closed");
    res.end(JSON.stringify({ router: "Closed " }));
    Router.close(() => {
      console.log(`you have closed the router`);
    });
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ Message: "solo Naser 404" }));
  }
});

const port = 4000;

Router.listen(port, () => {
  console.log(`https://localhost:${port}`);
});
