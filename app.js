const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", function(req, res) {
  res.send("hello");
});

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
