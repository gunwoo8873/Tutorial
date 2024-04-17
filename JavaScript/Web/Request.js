const request = require('request');

const url = `https://www.naver.com/`
// Url File Data => HTML Output(body)
request(url, (err, res, body) => { console.log(body); })