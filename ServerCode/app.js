const express = require('express');
const rateLimit = require('express-rate-limit')
const app = express();


////////////////////////////protection 1 - ip blacklist///////////////////////////////////////////////
var blackList =
    [
        // '127.0.0.1'
    ];
//////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////protection 2  -- limit the amount of req per time period////////////////////
//////////////////////////credit for express-rate-limit tool//////////////////////////////////////////
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,                  // 10 minutes
    max: 150,                                    // max requests per window for IP
    standardHeaders: true,
    legacyHeaders: false,
})

// Apply the rate limiting middleware to all requests
// app.use(limiter);
/////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////protection 3///////////////////////////////////////////////////////////////
let date = new Date();
/////////////////////////////////////////////////////////////////////////////////////////////////////


app.get('/', (req,res)=>{

    console.log('Handel request');

    //////////////////////////////protection 1 - ip blacklist
    var ip = req.ip
        || req.connection.remoteAddress
        || req.socket.remoteAddress
        || req.connection.socket.remoteAddress;

    if (ip.substr(0, 7) == "::ffff:") {     //get rid of extra symbols in th ip string
        ip = ip.substr(7)
    }

    if(blackList.indexOf(ip) > -1)
    {
        res.send(ip + ' this ip is in The BlackList')
        req.destroy();
        // res.end(); // exit if it is a black listed ip
    }
    /////////////////////////////////end-protect1////////////////////////////////////////////////////////


    ////////////////////protection 3 -- deny access by time, restrict access in night time///////////////
    else if(date.getHours() >= 0 && date.getHours() < 8)
    {
        res.send(' The web site is not available in this hours');
        req.destroy()
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    else
     res.send('Hello, Welcome to DOS ATTACK example')

});


module.exports = app;