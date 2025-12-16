import { error } from "console";
import fs, { readFile, readFileSync } from "fs";

// console.log(" the privious file:-", fs.readFileSync("fs.txt", "utf-8"));

// fs.appendFile("fs.txt", "solo is wrote", (error, data) => {
//   if (error) throw error;
//   console.log(" the new file:", fs.readFileSync("fs.txt", "utf-8"));
// });

// console.log(" reading the file", fs.readFileSync("fs.txt", "utf-8"));

fs.appendFile("fs.txt", "  and i will change  them to wins", (error) => {
  if (error) throw error;
  console.log(fs.readFileSync("fs.txt", "utf-8"));
});
