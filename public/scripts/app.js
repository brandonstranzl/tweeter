/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
    console.log("ready to go TWEETS!");
});


$(document).on('ready', function () {

// Make an ajax request to the database to get the existing tweets on load:
$.ajax({
  // see server files = tweets.js and routs.js for where to get the routes  - this means append /tweets to the "/" referred to in routes file: app.use("/tweets", tweetsRoutes);
  url: '/tweets',
  method: 'GET',
  // response is the pre loaded reply from the server to an ajax get request
  // usually a response will be in JSON format - you will need to parse it.  but here jquery is smart enough to parse for you.  see chrome tools and look at the GET
  success: function (response) {
    console.log('Success: ', response);

    renderTweets(response);
  }
})

// var loadTweets = function () {

// }
// loadTweets();


// AJAX GET REQUEST:
// Event.preventDefault();

// var loadTweets = $(function() {
//   var $form = $('#load-more-tweets');
//   var $section = $('#tweets-container')
//   $form on('submit', function ( event ) {
//     event.preventDefault();
//     var formData = $(this).serialize();

//     console.log('Form submitted, loading more tweets...');
//     $.ajax({
//       url: '/tweets',
//       method: 'POST',
//       data: $(this).serialize(),
//       success: function (????????) {
//         console.log('Success: ', renderTweets);
//         $section.append(renderTweets);
//       }
//     });
//   });
// });
// loadTweets();

// Ajax - need to do this for ajax:
// $( "form" ).on( "submit", function( event ) {
//   event.preventDefault();
//   console.log( $( this ).serialize() );
// });

// this object is only used if there is a SINGLE tweet - used to create the function createTweetElements below:
// const tweetData =
//     {
//       "user":       {
//        "name": "Newton",
//        "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle":    "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at":        1461116232227
//     }

// here is the ARRAY of tweets:
// const data = [
//   {
//     "user":    {
//                "name": "Newton",
//                "avatars": {
//                "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//                "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//                "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//                },
//                "handle": "@SirIsaac"
//                },

// "content":     {
//              "text": "If I have seen further it is by standing on the shoulders of giants"
//                },
// "created_at":  1461116232227
//                },

//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1461113796368
//   }
// ];

// // HERE IS THE RENDER TWEETS FUNCTION:
function renderTweets(db) {
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container - this put it it into the browser

// loop through array - each "tweet" = data[i]. therefore, i gets fed to createTweetElement. i = an object.
// createTweelElement accesses the object by the keys - i.user.name, i.user.avatar.small, i.user.handle,
// i.content, i.created_at
  for (var tweet of db) {
    var $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
  }

// if you dont need a loop and only dealing with one object:
// var tweet = createTweetElement(db)
// $('#tweets-container').append(db);

}

var createTweetElement = function (tweet) {

let userName = tweet.user.name;
let avatar = tweet.user.avatars.small;
let handle = tweet.user.handle;
let content = tweet.content.text;
let date = tweet.created_at;

let $tweet = $(`

        <article class="tweets" class="clearfix">
          <header class = "tweets">
            <img class = "tweets" class = "clearfix" src="${avatar}"/>
            <h2 class = "tweets" class = "clearfix">${userName}</h2>
            <span class="tweets">${handle}</span>
          </header>


          <section class="tweetText">
            ${content}
          </section>



          <footer class="tweets" class="clearfix">
            <p class="date">${new Date(date)}</p>
            <p class="icons">XYZ</p>
          </footer>

        </article>

        `)
// to see what a "tweet" looks like on the console - if just an object of single tweet:
// console.log($tweet);

return $tweet;

};

// renderTweets(data);

// console log the function:
// console.log(createTweetElement(tweetData));

// to see what a single tweet looks like on the page:
// to add it to the page so we can make sure it's got all the right elements, classes, etc.
// $('#tweets-container').append(createTweetElement(tweetData));

});