var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var updateRestaurantsTopLevel = function(db, callback) {
   db.collection('restaurants').updateOne(
      { "name" : "Juni" },
      {
        $set: { "cuisine": "American (New)" },
        $currentDate: { "lastModified": true }
      }, function(err, results) {
      console.log(results);
      callback();
   });
};

var updateRestaurantsEmbedded = function(db, callback) {
   db.collection('restaurants').updateOne(
      { "restaurant_id" : "41156888" },
      { $set: { "address.street": "East 31st Street" } },
      function(err, results) {
        console.log(results);
        callback();
   });
};

var updateRestaurantsMany = function(db, callback) {
   db.collection('restaurants').updateMany(
      { "address.zipcode": "10016", cuisine: "Other" },
      {
        $set: { cuisine: "Category To Be Determined" },
        $currentDate: { "lastModified": true }
      }
      ,
      function(err, results) {
        console.log(results);
        callback();
   });
};

var updateRestaurantsReplace = function(db, callback) {
   db.collection('restaurants').replaceOne(
      { "restaurant_id" : "41704620" },
      {
        "name" : "Vella 2",
        "address" : {
           "coord" : [ -73.9557413, 40.7720266 ],
           "building" : "1480",
           "street" : "2 Avenue",
           "zipcode" : "10075"
        }
      },
      function(err, results) {
        console.log(results);
        callback();
   });
};

var updateRestaurants = updateRestaurantsReplace;

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);

  updateRestaurants(db, function() {
      db.close();
  });
});
