// Import orm.js into burgers.js
var orm = require("../config/orm.js");

// The code that will call the ORM functions using bike specific input for the ORM.
var burger = {
  // Display all burgers in the db.
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // Add a new burger to the db.
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  // Change the eaten status to true.
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
  // Delete a burger from the db.
  deleteOne: function (condition, cb) {
    orm.deleteOne("burgers", condition, function (res) {
      cb(res);
    });
  },
};

// Export at the end of the burgers.js file.
module.exports = burger;
