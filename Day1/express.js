import express from "express";
const app = express();
app.use(express.json());
const items = [
  { id: 1, name: "faris naser" },
  { id: 2, name: "Faysel naser" },
  { id: 3, name: "Fuad naser" },
];

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.end(JSON.stringify({ message: "Welcome to Landing Page" }));
});
app.get("/home", (req, res) => {
  res.statusCode = 200;
  res.end(JSON.stringify({ HomePage: " welcome to home pages" }));
});
app.get("/items", (req, res) => {
  res.statusCode = 200;
  res.end(JSON.stringify({ message: items }));
});
app.get("/items/:id", (req, res) => {
  const ids = items.find((c) => c.id === parseInt(req.params.id));
  if (!ids) {
    res.status(404).send(" the item does not found");
  } else {
    res.send(ids);
  }
});

app.listen(5400, () => {
  console.log(`https:5400`);
});
