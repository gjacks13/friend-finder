// Dependencies
// =============================================================
const path = require("path");

// Routes
// =============================================================
module.exports = function(app) {  
  app.get("/api/survey", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
  app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};