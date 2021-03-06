var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var parser = require('rss-parser');

function feedsRoute() {
    var feeds = new express.Router();
    feeds.use(cors());
    feeds.use(bodyParser());

    feeds.get('/', function (req, res) {
        
        parser.parseURL('https://opensource.com/feed', function (err, parsed) {
            console.log("Found " + parsed.feed.entries.length + " feed entries");
            console.log(err);
            res.json(parsed.feed.entries);
        });
    });

    return feeds;
}

module.exports = feedsRoute;