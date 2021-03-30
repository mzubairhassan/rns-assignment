var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var jwt = require("jsonwebtoken"); // used to create, sign, and verify tokens
var bcrypt = require("bcryptjs");
var config = require("./server-config"); // get config file
const users = []; // for temp save
router.post("/login", function (req, res) {
  let fileRead = fs.readFileSync(__root + "server/users-list.json");
  let user = users.filter((user) => user.email === req.body.email)[0];
  console.log(user);
  console.log(req.body);
  if (user) {
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid)
      return res
        .status(401)
        .send({ auth: false, message: "Password Incorrect" });

    // if user is found and password is valid
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400, // expires in 24 hours
    });

    // return the information including token as JSON
    res.status(200).send({ auth: true, token: token });
  } else {
    return res.status(404).send("No user found.");
  }
});

router.get("/logout", function (req, res) {
  res.status(200).send({ auth: false, token: null });
});

router.post("/register", function (req, res) {
  console.log("asd");
  let fileRead = fs.readFileSync(__root + "server/users-list.json");
 
  var newUser = req.body.user;
  var hashedPassword = bcrypt.hashSync(req.body.user.password, 8);
  newUser = { ...newUser, password: hashedPassword, _id: uuidv4() };

  users.push(newUser);
  fs.writeFileSync(__root + "server/users-list.json", JSON.stringify(newUser));
  res.status(200).send({ message: "User Registered Successfully" });
});

module.exports = router;
