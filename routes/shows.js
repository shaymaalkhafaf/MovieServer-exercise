const express = require("express");
const router = express.Router();
const db = require("../model/db");
//GET home page

router.get("/", function (req, res, next) {
  res.render("index", {
    locals: {
      title: "List of Movies/Shows",
      path: req.path,
      showsData: db,
      shows: `<h2> rendered show data</h2>`,
    },
    partials: {
      head: "/partials/shows",
    },
  });
});

router.get("/:title", function (req, res, next) {
  const { title } = req.params;
  const movie = db.find((f) => f.Title === title);

  res.send(movie.Plot);
});

// router.get("/action", function (req, res, next) {
//   res.send("action page here");
// });

module.exports = router;