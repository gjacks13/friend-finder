const express = require("express");


express.get("/api/survey", (req, res, next) => {
  res.sendFile("../public/survey.html");
});

express.get("/", (req, res, next) => {
  res.sendFile("../public/home.html");
});