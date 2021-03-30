var express = require("express");
var cors = require('cors')
var app = express();
app.use(cors());

global.__root = __dirname + "/";
var AuthController = require(__root + "server/Auth");
app.use("/api/auth", AuthController);
app.listen(3002, () => {
  console.log(`Placeholder server running at localhost:3002`);
});
