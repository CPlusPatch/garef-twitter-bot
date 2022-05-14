const {TwitterApi} = require('twitter-api-v2');

const client = new TwitterApi({
    appKey: 'cEqR9VH92UgEHM001trUPdKDo',
    appSecret: 'uxJ7ccBYFHjjjDQ7YiHVBFu7wdO8FlZgdzm874fmuT1Cd2YWgE',
    accessToken: '1413032007756664832-6komplzIwE81ofxmqei0b9PaIjJwP7',
    accessSecret: 'bLtVn7Kr8HECH85KGdNKdC34fP4LUma0i9iIun3WTZ0Wg',
});

client.v1.tweet('This tweet was written by a bot').then((val) => {
    console.log(val)
    console.log("success")
}).catch((err) => {
    console.log(err)
})