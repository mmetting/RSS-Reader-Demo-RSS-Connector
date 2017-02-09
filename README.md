# RSS Connector Service

Connects to the RSS feed of [opensource.com](https://opensource.com/).

RSS feeds are usually provided in an XML format. Though XML has a slight overhead compared to a JSON response. Especially if bandwith
plays an important role (re Mobile).

Therefore this MBaaS Service uses a Node module `rss-parser` to call out to [opensource.com](https://opensource.com/), retrieving the feed 
as XML and converting it to JSON.

# Group Hello World API
This part of the README.md makes the MBaaS Service testable from RHMAP's App Studio. Please ignore, since the formatting is optimized for RHMAP.

# feeds [/feeds]

'Feeds' endpoint.

## feeds [GET] 

'Feeds' endpoint.

+ Request (application/json)

+ Response 200 (application/json)

+ Body
            [
                {
                    "title": "Hello World",
                    "link": "https://opensource.com/article/17/2/top-gnome-shell-extensions",
                    "pubDate": "Thu, 09 Feb 2017 03:03:00 -0500",
                    "content": "Candy oat cake halvah ice cream icing bear claw brownie pie ice cream. Powder topping sugar plum lollipop brownie lollipop oat cake cookie. Lollipop dragée chocolate halvah biscuit. Dragée liquorice sweet. Candy canes dragée marshmallow muffin macaroon cheesecake apple pie bear claw bear claw.",
                    "contentSnippet": "Candy oat cake halvah ice cream icing bear claw brownie pie ice cream. Powder topping sugar plum lollipop brownie lollipop oat cake cookie. Lollipop dragée chocolate halvah biscuit. Dragée liquorice sweet. Candy canes dragée marshmallow muffin macaroon cheesecake apple pie bear claw bear claw.",
                    "guid": "https://opensource.com/article/17/2/top-gnome-shell-extensions"
                },
                {
                    "title": "Hello World",
                    "link": "https://opensource.com/article/17/2/top-gnome-shell-extensions",
                    "pubDate": "Thu, 09 Feb 2017 03:03:00 -0500",
                    "content": "Candy oat cake halvah ice cream icing bear claw brownie pie ice cream. Powder topping sugar plum lollipop brownie lollipop oat cake cookie. Lollipop dragée chocolate halvah biscuit. Dragée liquorice sweet. Candy canes dragée marshmallow muffin macaroon cheesecake apple pie bear claw bear claw.",
                    "contentSnippet": "Candy oat cake halvah ice cream icing bear claw brownie pie ice cream. Powder topping sugar plum lollipop brownie lollipop oat cake cookie. Lollipop dragée chocolate halvah biscuit. Dragée liquorice sweet. Candy canes dragée marshmallow muffin macaroon cheesecake apple pie bear claw bear claw.",
                    "guid": "https://opensource.com/article/17/2/top-gnome-shell-extensions"
                }
            ]
