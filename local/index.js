const http = require('http');

const requestListener = function (req, res) {

  let redis = require('redis'),

    client = redis.createClient({
      port: 14542,
      host: 'redis-14542.c8.us-east-1-4.ec2.cloud.redislabs.com',
      password: 'VREdWqF5PJBYj4jRZhrVvFBdcQaWpL3k',
    });

  client.keys('*', function (err, keys) {
    if (err) {
      throw err;
    } else {
      for(var i = 0, len = keys.length; i < len; i++) {
        console.log(keys[i]);
      }
      res.writeHead(200);
      res.end(keys.toString);      
    }
  });  
}

const server = http.createServer(requestListener);
server.listen(8080);
