module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Burger;
};

// var orm = require('../config/orm.js');

// var burger = {
//     selectAll: function(cb) {
//         orm.selectAll('burgers', function(res) {
//             cb(res);
//         })
//     },
//     insertOne: function(cols, vals, cb) {
//         orm.insertOne('burgers', cols, vals, function(res) {
//             cb(res);
//         })
//     },
//     updateOne: function(objColVals, condition, cb) {
//         orm.updateOne('burgers', objColVals, condition, function(res) {
//             cb(res);
//         })
//     }
// };

// // Export the database functions for the controller (burgers_controller.js)
// module.exports = burger;
