var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var parser = require('rss-parser');

function feedsRoute() {
    var feeds = new express.Router();
    feeds.use(cors());
    feeds.use(bodyParser());

    feeds.get('/', function (req, res) {
        // http://www.redbull.com/de/de/rss/index.rss
        
        parser.parseURL('http://www.redbull.com/de/de/rss/index.rss', function (err, parsed) {
            console.log("Found " + parsed.feed.entries.length + " feed entries");
            res.json(parsed.feed.entries);
        });
    });

    return feeds;
}

module.exports = feedsRoute;