import bodyParser = require("body-parser");
import { myDataSource } from "./data-connection";
import { User } from "./User";

const express = require("express");
const app = express();

const port = 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

myDataSource.initialize();

app.get("/", (req, res) => {
  res.send("hlo");
});

app.get("/home", async (req: any, res: any) => {
  const response = await myDataSource.getRepository(User).find();
  res.send(response);
});

app.get("/home/:id", async (req: any, res: any) => {
  const response = await myDataSource.getRepository(User).findOneBy({
    id: req.params.id,
  });
  return res.send(response);
});

app.post("/home", async (req: any, res: any) => {
  const response = myDataSource.getRepository(User).create(req.body);
  const result = await myDataSource.getRepository(User).save(response);
  res.send(result);
});

app.delete("/home/:id", async (req: any, res: any) => {
  const response = await myDataSource.getRepository(User).delete(req.params.id);
  res.send(response);
});

app.listen(port, () => {
  console.log(`"Running on port 5000",  ${port}`);
});
