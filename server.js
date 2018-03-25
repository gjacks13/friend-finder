const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");
const parser = require("body-parser");

const port = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout : "main"}));
app.set("view engine", "handlebars");
