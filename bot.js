var Twit = require('twit');
const readline = require('readline');

console.log('Twitter bot server is starting!');

// Twit config
var config = require('./config');
var T = new Twit(config);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is hapenning? ', (answer) => {
    postTweet(answer);
    rl.close();
});

function postTweet(text) {

    var tweetText = text;

    var myTweet = {
        status: tweetText
    }

    var tweeted = function (err, data, response) {
        if (err) {
            console.log("Error, not posted!");
        } else {
            console.log("Tweet was posted!");
        }
    }

    T.post('statuses/update', myTweet, tweeted);

}