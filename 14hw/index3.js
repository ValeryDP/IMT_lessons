const request = require('request');

request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(JSON.parse(body)); // Print currencies.
  }
});
