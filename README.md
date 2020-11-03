## Birthday Bot

##### A [Twitter bot](https://twitter.com/birfday_bot) that posts an update daily with celebrity Birthdays.

### Made possible with:
* [Cheerio](https://cheerio.js.org/) - To scrape the source of the birthday information [birthdaybuddies](http://birthdaybuddies.net)
* [node-cron](https://www.npmjs.com/package/cron) - To schedule the tweets
* [Twurl](https://github.com/twitter/twurl) - To update posts securely and efficiently
* [Child process](https://nodejs.org/api/child_process.html) - To execute Twurl command autonomously


#### Other dependencies:
* request
* url-parse

