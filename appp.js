const http = require("http");
const express = require("express");
const appp = express();
const router = express.Router();
var db2 = require("./database.js");
var bodyParser = require("body-parser");

appp.use(bodyParser.urlencoded({ extended: false }));
appp.use(bodyParser.json());

appp.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

appp.get("/kalkulator", (req, res) => {
  res.sendFile(__dirname + "/kalkulator.html");
});

appp.post("/kalkulator", (req, res) => {});

appp.get("/programowanie", (req, res) => {
  res.sendFile(__dirname + "/programowanie.html");
});

appp.post("/postData", (req, res) => {
  var data = {
    opis: req.body.opis,
  };
  var sql = "SELECT opis FROM user";
  var params = [data.opis];
  var andrzzej = db2.run(sql, params, function (err, result) {});
  res.send(
    andrzzej.array.forEach((element) => {
      element;
    })
  );
});

appp.use(express.static(__dirname + "/tatry.html"));

appp.get("/tatry", (req, res) => {
  res.sendFile(__dirname + "/tatry.html");
});

const wiadomosci = [
  {
    imie: "Dominik",
    nazwisko: "Bobiec",
    email: "didn@gmail.com",
    zawod: "programista",
    hobby: "sport",
  },
];

appp.get("/kontakt", (req, res) => {
  res.json(wiadomosci);
});

appp.get("/kontakt", (req, res) => {
  res.sendFile(__dirname + "/kontakt.html");
});

appp.listen(3000);
console.log("Utworzono połączenie. Port: 3000");
