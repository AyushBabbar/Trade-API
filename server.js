const app = require("./app")
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ayushbabbar", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('DB connection successful!'))
  .catch((err) => {
    console.log('DB connection NOT successful!');
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is listening on port 3000")
})