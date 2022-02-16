// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/celebrities/create", (req, res) =>
  res.render("celebrities/new-celebrity")
);

router.post("/celebrities/create", (req, res, next) => {

    const { name, occupation, catchPhrase } = req.body;
    
  Celebrity.create({ name, occupation, catchPhrase })
    .then((createdCelebrity) => {
      res.redirect("/celebrities");
    })
    .catch((err) => next(err));
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then((alltheCelebrities) => {
      res.render("celebrities/celebrities", {
        celebrities: alltheCelebrities,
      });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
