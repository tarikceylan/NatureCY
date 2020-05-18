require('dotenv').config()

const twitter = require('twitter')

const client = new twitter ({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    acces_token_secret: process.env.ACCESS_SECRET
});

console.log();