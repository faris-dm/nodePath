import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send(" Landin Pages");
});

app.listen(5400, () => {
  console.log(`https:5400`);
});
