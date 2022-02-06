const express = require("express");
const router = express.Router();
const db = require("../model/db");

//GET home page

router.get("/", function (req, res, next) {
  res.render("index", {
    locals: {
      title: "Movies Express!",
      showsData: db,
      path: req.path,
    },

    partials: {
      head: "/partials/shows",
    },
  });
});

module.exports = router;