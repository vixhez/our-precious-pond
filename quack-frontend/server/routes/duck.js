const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const duckRoutes = express.Router();

// This section will help you get a list of all the documents.
duckRoutes.route("/duck_info").get(async function (req, res) {
    const dbo = require("../db/conn");
    const dbConnect = dbo.getDb();
  
    dbConnect
      .collection("duck_info")
      .find({})
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching ducks!");
        } else {
          res.json(result);
        }
    });
});

duckRoutes.route("/duck_quiz").get(async function (req, res) {
    const dbo = require("../db/conn");
    const dbConnect = dbo.getDb();
  
    dbConnect
      .collection("duck_quiz")
      .find({})
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching ducks!");
        } else {
          res.json(result);
        }
    });
});

module.exports = duckRoutes;