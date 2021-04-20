var Twitter = require('twitter');
 
//Twitter API KEY: qFDjBaBAnarK2GYQcpNgZmqvn
// API Secret Key : 2mXWT8GXXCR3HWTOIiNRPOwbOJqj9pzZ3d6RGpaRGGFrqgRJcy
// Bearer Token: AAAAAAAAAAAAAAAAAAAAAKJ6OAEAAAAA0rixz4XPI%2FuDkyPvnimgIN5Xn%2Bk%3DzjEfty5I9ayBlg8br15P6XbhiF5zLyI8yThAE3p9mQhiliLAzw


var client = new Twitter({
  consumer_key: 'qFDjBaBAnarK2GYQcpNgZmqvn',
  consumer_secret: '2mXWT8GXXCR3HWTOIiNRPOwbOJqj9pzZ3d6RGpaRGGFrqgRJcy',
  access_token_key: '1373644037002047492-75EPhgjZzirKoDkqt8pJWMx5kcAUto',
  access_token_secret: 'FsPneqRUEFP9MRZxgJNfIbQzirRTq1xDifJjpi90yyXte'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});