const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3000;

const lista = [{ nazwa: "wybitnie" }];

app.get("/", function (req, res) {
  res.json(lista);
});

app.get("/gettask", function (req, res) {});

app.listen(3000);
