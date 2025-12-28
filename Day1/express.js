import express from "express";

const app = express();
app.use(express.json());

const items = [
  { id: 1, name: "faris Naser" },
  { id: 2, name: "Fatiya Naser" },
  { id: 3, name: "fuad Naser" },
  { id: 4, name: "hero Page" },
];

// app.get("/", (req, res) => {
//   // Use res.json() to simplify
//   res.json({ landing: "welcome to Pages" });
// });

// app.get("/home", (req, res) => {
//   res.json({ landing: "welcome to home where family met" });
// });

// app.post("/items", (req, res) => {
//   const add = {
//     id: items.length + 1,
//     name: req.body.name,
//   };
//   items.push(add);
//   // FIX 1: Use res.json() instead of res.end() to send the object
//   res.json(items);
// });

// app.get("/items", (req, res) => {
//   // FIX 2: Change 'add' to 'items' because 'add' doesn't exist here
//   res.json(items);
// });

app.get("/", (req, res) => {
  res.send(" wellcome to landing pages");
});

app.get("/home", (req, res) => {
  res.send(" wellcome to home pages");
});

app.get("/items", (req, res) => {
  res.send(items);
});
app.post("/items", (req, res) => {
  const add = {
    id: items.length + 1,
    name: req.body.name,
  };
  items.push(add);
  res.send(items);
});
const port = 7000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
