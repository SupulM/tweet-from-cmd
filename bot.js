var Twit = require('twit')
console.log('Twitter bot server is starting!')

var T = new Twit({
  consumer_key:         'Yj3SY8Q1e7ZaD6ls0iUJkYZq8',
  consumer_secret:      'K2g9osqUZM1KmluVtniia3Jy9xl35cRYdQRakKMtO0FIPkB8m6',
  access_token:         '856545441176985600-evmGHyJyrKaYm534jwY3LNkGo4ggdyA',
  access_token_secret:  'nCkhvJHeXKpyYqu59q12H7nM7KMg41bA3bLGJ4LWlrVzG',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

T.post('statuses/update', { status: 'Hello, again!' }, function(err, data, response) {
  console.log(data)
})