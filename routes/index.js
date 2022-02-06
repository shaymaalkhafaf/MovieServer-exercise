const express = require("express");
const db = require("../model/db");
const router = express.Router();

//GET home page

router.get("/", function (req, res, next) {
  res.render("index", {
    locals: {
      title: "Movies Express!",
      path: req.path,
      showsData: db,
      shows: false,
    },

    partials: {
      head: "/partials/shows",
    },
  });
});

module.exports = router;