// import http from "http";

// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "text/plain" });
//   res.end("hellow world Node  with Ai Mentor");
// });

// app.listen(3000, () => {
//   console.log(` server running at https://localhost:3000`);
// });

// Task Two
import http from "http";
const app = http.createServer((req, res) => {
  res.end(" solo naser  pleases serve  your ");
});
const port = 8000;

app.listen(port, () => {
  console.log(`https://localhost:${port}`);
});
