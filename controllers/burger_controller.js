var express = require("express");
var router = express.Router();

var burger = require("../models/burgers.js");

router.get("/", function (req, res) {
 burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(
    ["burger_name", "eaten"],
    [req.body.burger_name, req.body.eaten],
    function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
      console.log(result);
    }
  );
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(
    {
      eaten: req.body.eaten,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});
// Delete burger from db.
router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burgers.deleteOne(condition, function (result) {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404.
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
