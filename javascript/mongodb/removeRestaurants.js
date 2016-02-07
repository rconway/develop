var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var removeRestaurantsMany = function(db, callback) {
   db.collection('restaurants').deleteMany(
      { "borough": "Manhattan" },
      function(err, results) {
         console.log(results);
         callback();
      }
   );
};

var removeRestaurantsOne = function(db, callback) {
   db.collection('restaurants').deleteOne(
      { "borough": "Queens" },
      function(err, results) {
         console.log(results);
         callback();
      }
   );
};

var removeRestaurantsAll = function(db, callback) {
   db.collection('restaurants').deleteMany( {}, function(err, results) {
      console.log(results);
      callback();
   });
};

var removeRestaurants = removeRestaurantsAll;

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  removeRestaurants(db, function() {
      db.close();
  });
});