var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Burger.findAll().then(function(results) {
      var hbsObject = {
        burgers: results
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  app.post("/api/burgers", function(req, res) {
    // console.log(req.body);
    db.Burger.create({
      burger_name: req.body.burger_name
      // devoured: false
    }).then(function(results) {
      console.log(results);
      res.json(results);
    });
  });

  app.put("/api/burger/:id", function(req, res) {
    db.Burger.update(
      {
        devoured: true
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function(results) {
      console.log(results);
      res.json(results);
    });
  });
};

// var express = require('express');

// var router = express.Router();

// var burger = require('../models/burger.js');

// // Create all our routes and set up logic within each one if necessary
// router.get('/', function(req, res) {
//     burger.selectAll(function(data) {
//         var hsbObject = {
//             burgers: data
//         };
//         // console.log(hsbObject);
//         res.render('index', hsbObject);
//     });
// });

// router.post('/api/burgers', function(req, res) {
//     console.log(req);
//     burger.insertOne(['burger_name'], [req.body.burger_name], function(result) {
//         res.json({ id: result.insertId });
//     });
// });

// router.put('/api/burgers/:id', function(req, res) {
//     var condition = 'id = ' + req.params.id;

//     console.log('condition', condition);

//     burger.updateOne(
//         {
//             devoured: req.body.devoured
//         },
//         condition,
//         function(result) {
//             if (result.changedRows === 0) {
//                 // If no rows were changed, then the ID must not exist, so 404
//                 return res.status(404).end();
//             }
//             res.status(200).end();
//         }
//     );
// });

// // Export routes for server.js to use.
// module.exports = router;
