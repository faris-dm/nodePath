import http from "http";

const app = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("hellow world Node  with Ai Mentor");
});

app.listen(3000, () => {
  console.log(` server running at https://localhost:3000`);
});
