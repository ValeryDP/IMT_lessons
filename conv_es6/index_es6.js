const Converter = require('./conv_es6')
const request = require('request')

request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3', function(err, res, body){
    if (!err && res.statusCode === 200) {
        let converter = new Converter(JSON.parse(body)[2].buy)
        console.log(converter.convertToUs(25000))
    } 
})