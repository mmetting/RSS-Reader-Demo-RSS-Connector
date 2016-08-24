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
        // http://apps.shareholder.com/rss/rss.aspx?channels=18&companyid=ONE&sh_auth=2709218269%2E0%2E0%2E42607%2E9e478c44a4c34c8d5169db026204b022
        
        parser.parseURL('https://opensource.com/feed', function (err, parsed) {
            console.log("Found " + parsed.feed.entries.length + " feed entries");
            console.log(err);
            res.json(parsed.feed.entries);
        });
    });

    return feeds;
}

module.exports = feedsRoute;