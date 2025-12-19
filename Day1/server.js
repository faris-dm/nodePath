import { fileLoader } from "ejs";
import { json } from "express";

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
// console.log(" this is a file", out.toString())
import fs, { readFile, readFileSync } from "fs";
import fs from "fs";
import http from "http";

const logFile = "requests.log";

const server = http.createServer((req, res) => {
  const timestamp = new Date().toISOString();
  const { method, url } = req;

  // Log the request (without the extra route-specific messages)
  const logMessage = `${timestamp} - ${method} ${url}\n`;

  // Asynchronously append to the log file
  fs.appendFile(logFile, logMessage, (err) => {
    if (err) {
      console.error("Failed to write to log file:", err);
    }
  });

  res.setHeader("Content-Type", "application/json");

  let responseMessage;
  let statusCode;

  if (url === "/") {
    statusCode = 200;
    responseMessage = { message: "Landing Page" };
  } else if (url === "/about") {
    statusCode = 200;
    responseMessage = { message: "ABOUT ME PAGE" };
  } else if (url === "/product") {
    statusCode = 200;
    responseMessage = { message: "product Page" };
  } else if (url === "/close") {
    statusCode = 200;
    responseMessage = { message: "Server is closing" };

    // Send response and then close the server
    res.statusCode = statusCode;
    res.end(JSON.stringify(responseMessage));

    // Close the server
    server.close(() => {
      console.log("Server closed");
    });

    // We return early because we already sent the response and are closing the server.
    return;
  } else {
    statusCode = 404;
    responseMessage = { message: "Page not found" };
  }

  res.statusCode = statusCode;
  res.end(JSON.stringify(responseMessage));
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
