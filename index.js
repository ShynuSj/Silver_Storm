const express = require("express");
const app = express();
const path = require('path')

const port = 80;

app.use(express.static('static'));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
