'use strict';

exports.http = (request, response) => {
  let redis     = require('redis'),
  /* Values are hard-coded for this example, it's usually best to bring these in via file or environment variable for production */
  client = redis.createClient({
    port: 14542,
    host: 'redis-14542.c8.us-east-1-4.ec2.cloud.redislabs.com',
    password: 'VREdWqF5PJBYj4jRZhrVvFBdcQaWpL3k',
  });
  
  client.get('store',function(err,value) {
        if (err) {
          throw err;
        } else {
          response.status(200).send(value);
        }
      }
    );
};

exports.event = (event, callback) => {
  callback();
};
