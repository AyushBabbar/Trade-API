const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/ayushbabbar", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('DB connection successful!'))
  .catch((err) => {
    console.log('DB connection NOT successful!');
    console.log(err);
  });

app.get('/', (req, res) => {
  res.send("Index");
  console.log(req.params);
});


module.exports = app;