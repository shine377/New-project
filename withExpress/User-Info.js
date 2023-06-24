const express = require("express");

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

const data = [
  {
    Name: "Shiny",
    id: 1,
    city: "Coimbatore",
  },
  {
    Name: "Mary",
    id: 2,
    city: "Chennai",
  },
];

app.get("/", (req, res) => {
  res.send("Hello,Welcome");
});

app.get("/home", (req, res) => {
  res.send(data);
});

app.get("/home/:id", (req, res) => {
  let body = data.find((s) => s.id === parseInt(req.params.id));
  res.send(body);
});

app.put("/home/:id", (req, res) => {
  let body = data.find((s) => s.id === parseInt(req.params.id));
  res.send(body);
});

app.post("/home", (req, res) => {
  const bodyData = {
    Name: req.body.Name,
    id: data.length + 1,
    city: req.body.city,
  };

  data.push(bodyData);
  res.send(data);
});

app.delete("/home/:id", (req, res) => {
  let body = data.find((s) => s.id === parseInt(req.params.id));
  const dataDelete = data.indexOf(body);
  data.splice(dataDelete, 1);
  res.send(data);
});

app.listen(port, () => {
  console.log("Running on port", port);
});
