import { error } from "console";
import { fileLoader } from "ejs";
import fs, { readFile, readFileSync } from "fs";

// console.log(" the privious file:-", fs.readFileSync("fs.txt", "utf-8"));

// fs.appendFile("fs.txt", "solo is wrote", (error, data) => {
//   if (error) throw error;
//   console.log(" the new file:", fs.readFileSync("fs.txt", "utf-8"));
// });

// console.log(" reading the file", fs.readFileSync("fs.txt", "utf-8"));

// fs.appendFile("fs.txt", "  and i will change  them to wins", (error) => {
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

const file = "fs.txt";

fs.appendFileSync(file, "\n You are Gc Pleases Work Hard");

const out = fs.readFileSync(file, "utf-8");
console.log(" this is a file", out.toString());
