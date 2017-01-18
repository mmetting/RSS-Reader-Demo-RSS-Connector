var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var parser = require('rss-parser');

function feedsRoute() {
    var feeds = new express.Router();
    feeds.use(cors());
    feeds.use(bodyParser());

    feeds.get('/', function (req, res) {
        
        parser.parseURL('http://autsys.aalto.fi/en/feed.rss', function (err, parsed) {
            console.log("Found " + parsed.feed.entries.length + " feed entries");
            console.log(err);
            res.json(parsed.feed.entries);
        });
    });

    return feeds;
}

module.exports = feedsRoute;

/* Other feeds
https://am.jpmorgan.com/uk/institutional/rss.xml
http://www.redbull.com/de/de/rss/index.rss
https://opensource.com/feed
*/