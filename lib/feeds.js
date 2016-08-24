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
        //https://opensource.com/feed
        
        parser.parseURL('http://apps.shareholder.com/rss/rss.aspx?channels=14&companyid=ONE&sh_auth=2709110982%2E0%2E0%2E42607%2E72a3d1beacc045909db9df758d7da660', function (err, parsed) {
            console.log("Found " + parsed.feed.entries.length + " feed entries");
            res.json(parsed.feed.entries);
        });
    });

    return feeds;
}

module.exports = feedsRoute;