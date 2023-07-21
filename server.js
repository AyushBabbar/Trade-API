const app = require("./app")
const mongoose = require("mongoose");
require('dotenv').config()

mongoose.connect(process.env.DB_PORT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('DB connection successful!'))
  .catch((err) => {
    console.log('DB connection NOT successful!');
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log("Server is listening on port 3000")
})