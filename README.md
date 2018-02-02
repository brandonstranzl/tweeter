# Tweeter Project

Tweeter is a simple, single-page Twitter clone.  It is a full-stack application buit with Node, Ajax, and Express
middleware, MongoDB for the database, and Javascript, Jquery and standard HTML and CSS on the front-end.

## Final Product

Here is a screenshot of the home page:
!["screenshot of the main page - this is the home page"](https://github.com/brandonstranzl/tweeter/blob/master/docs/Home%20Screen.png?raw=true)

Here is a screenshot of the slide down of the tweet box after clicking "compose":
!["screenshot of the empty tweet box"](https://github.com/brandonstranzl/tweeter/blob/master/docs/After%20hitting%20compose,%20tweet%20box%20slides%20down.png?raw=true)

Here is a screen shot of entering a tweet:
!["screenshot of entering a test tweet"](https://github.com/brandonstranzl/tweeter/blob/master/docs/Enter%20a%20Tweet!.png?raw=true)

Here is a screenshot of posting a tweet to the historical tweet database. A new tweetbox automatically
appears at the top, and the tweet posted posts at the top of the list of historical tweets. Note that
historical tweets are set to be slightly opaque with opacity at 65% unless you hover over with the mouse,
at which point thy will move to 100% opacity.
!["screenshot of posting a test tweet"](https://github.com/brandonstranzl/tweeter/blob/master/docs/Post%20a%20Tweet!.png?raw=true)

Here are screenshots showing the change in opacity for the tweets on the hover of the mouse:

Before hover:
!["screenshot of tweet boxes before hover"](https://github.com/brandonstranzl/tweeter/blob/master/docs/Before%20hover%20-%20no%20icons.png?raw=true)

On hover:
!["screenshot of tweet boxes AFTER/ON hover"](https://github.com/brandonstranzl/tweeter/blob/master/docs/On%20hover%20-%20icons%20appear%20and%20text%20is%20darker.png?raw=true)

## Dependencies
  "dependencies": {
    "body-parser": "^1.18.2",
    "chance": "^1.0.13",
    "express": "^4.13.4",
    "jquery": "^3.3.1",
    "md5": "^2.2.1",
    "mongodb": "^2.2.34",
    "nodemon": "^1.14.11"

Please note that hte package.JSON says you will need moment (this is to convert epoch times into various other times), but you will not need this as the moment functionality is using CDN in the html file.





