const {TwitterApi} = require('twitter-api-v2');
const config = require('./config.json');
const events = require('events');

console.log("Connecting to Twitter's API...");
const client = new TwitterApi({
    appKey: config.appKey,
	appSecret: config.appSecret,
	accessToken: config.accessToken,
	accessSecret: config.accessSecret
});
console.log("Connected!");

/* client.v1.tweet("I'm tweetin'").then((val) => {
    console.log("success");
}).catch((err) => {
    console.log(err);
}); */