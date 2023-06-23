const data = require("./User_Data.json")
const http = require("http");

const port = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { type: "text/html" });
    const url = req.url;

    if (url === "/Section1") {
      res.write("This is the project without express");
      res.end();
    } else if (url === "/Data") {
      const jsonData = {data};

      res.writeHead(200, { "type": "json" });
      res.write(JSON.stringify(jsonData));
      res.end();
    } else {
      res.write("Hello!,How you doingg");
      res.end();
    }
  })
  .listen(port, () => {
    console.log("connected");
  });
