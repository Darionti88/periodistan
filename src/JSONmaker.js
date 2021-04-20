var request = require('request');
let fs = require('fs')

var headers = {
    'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAKJ6OAEAAAAA0rixz4XPI%2FuDkyPvnimgIN5Xn%2Bk%3DzjEfty5I9ayBlg8br15P6XbhiF5zLyI8yThAE3p9mQhiliLAzw'
};

var options = {
    method: 'GET',
    url: 'https://api.twitter.com/2/tweets?ids=1128896138575253504,1128896142115266561,1128896145571426304,1128896152139702272,1128896159253192704,1128899394319847424,1128899396895158272,1128899398887497728,1128899403132153856,1128899408400138240,1128899412003045376,1128901666470813696,1128901669734014976,1128901673659830272,1128901676730114048,1128904129382879232,1128904133908541440,1128904137154998273,1128904140858560512,1128904144151031808&tweet.fields=attachments,text&expansions=attachments.media_keys&media.fields=preview_image_url,url',
    headers: headers
    
};

request(options, (error, response)=> {
    if (error) throw new Error(error);
    fs.writeFile('primeraGuerra.json', response.body, (err)=>{
        if (err){
            console.log(err)
        }
        });
});
