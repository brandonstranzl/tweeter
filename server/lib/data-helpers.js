"use strict";

// Simulates the kind of delay we see with network or filesystem operations
// const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      // simulateDelay(() => {
      // function saveTweet - when invoked, pass in a newTweet plus a callback. This function
      // gets invoked in routes/tweets.js and the callback passed = THE CALLBACK PASSED IS FUNCTION (ERR) { IF (ERR) { RES.STATUS(500).JSON....ELSE...RES.STATUS(201).SEND(); } });
      // ...SO, then saveTweet has a parem for newTweet and the callback.
      // so it moves forward to access the collection "tweets" on mongo and does an insertOne.
      // insertOne requires callback. callback is a function - err, res - that then itself calls
      // the callback provided by tweets.js shown above in line 14 - if there is an err, send status bad, if not,

        db.collection("tweets").insertOne(newTweet, function(err, res) {
          if (err) {
            callback(err);
            return;
          }
            // *******I dont understand why there are two parameters here in function in line 26:****
            callback(null);
        });
      // });
    },

    // Get all tweets in `db`, sorted by newest first.
    // This is a function declared here and called in tweets.js.
    // The parameter is given to data-helpers by tweets.js - in this case the callback is
    // a function - function (err) { if err, res status 500, else res json}
    getTweets: function(callback) {
      // simulateDelay(() => {
        const sortNewestFirst = (a, b) => a.created_at - b.created_at;

        db.collection("tweets").find().toArray((err, tweets) => {
          if (err) {
            callback(err);
            return;
          }

          callback(null, tweets.sort(sortNewestFirst))
        })
      // });
    }

  };
}
