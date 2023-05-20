require('dotenv').config()
const express = require("express");
const app = express();
const path = require('path')


app.use(express.static('static'));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(process.env.PORT, () => {
  console.log(`Silverstorm started on port ${process.env.PORT}`);
});
