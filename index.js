const {TwitterApi} = require('twitter-api-v2');
const config = require('./config.json');

const client = new TwitterApi({
    appKey: config.appKey,
	appSecret: config.appSecret,
	accessToken: config.accessToken,
	accessSecret: config.accessSecret
});

client.v1.tweet('This tweet was written by a bot').then((val) => {
    console.log(val);
    console.log("success");
}).catch((err) => {
    console.log(err);
});