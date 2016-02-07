var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var indexRestaurantsCuisine = function(db, callback) {
   db.collection('restaurants').createIndex(
      { "cuisine": 1 },
      null,
      function(err, results) {
         console.log(results);
         callback();
      }
   );
};

var indexRestaurantsCompound = function(db, callback) {
   db.collection('restaurants').createIndex(
      { "cuisine": 1, "address.zipcode": -1 },
      null,
      function(err, results) {
         console.log(results);
         callback();
      }
   );
};

var indexRestaurants = indexRestaurantsCompound;

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  indexRestaurants(db, function() {
      db.close();
  });
});
