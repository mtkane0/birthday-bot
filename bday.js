let request = require('request');
let cheerio = require('cheerio');
let URL = require('url-parse');
var cron = require('node-cron');
const { exec } = require('child_process');

cron.schedule('0 7 * * *', () => {

  const pageToVisit = "https://birthdaybuddies.net";
  console.log(`Visiting page ${pageToVisit}`);

  request(pageToVisit, (err, res, body) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    console.log(`status code: ${res.statusCode}`);
    if (res.statusCode === 200) {
      let $ = cheerio.load(body);
      let bdays = '';
      const length = $('.todays-birthdays').find('.name').length;
      $('.todays-birthdays').find('.name').each(function (i, el) {
        if (i + 1 === length) {
          bdays += $(el).text().toString() + '  #birthday'
        } else {
          bdays += $(el).text().toString() + ', ';
        }
      });
      console.log(`Today's Birthdays: ${bdays}`);
      exec(`twurl -d  "status=${bdays} " /1.1/statuses/update.json`);
    }
  });
});