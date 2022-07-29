const express = require("express");
const connect = require("./configs/db");
// const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
 const port = 2345;
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
const userController = require("./controller/user.controller");

app.use("/employees", userController);

app.listen(port, async () => {
    try {
      await connect();
      console.log(`server is running on port ${port}`);
    } catch (err) {
      console.error(err.message);
    }
  });

