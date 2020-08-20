module.exports = function (req, res) {
  
    let redis = require('../../node_modules/redis'),
  
      client = redis.createClient({
        port: 16180,
        host: 'redis-16180.c238.us-central1-2.gce.cloud.redislabs.com',
        password: 'Eaf5svuXjw8LBuJuCkrFggGKvhThIM4U',
      });
  
    client.keys('*', function (err, keys) {
      if (err) {
        throw err;
      } else {
        for(var i = 0, len = keys.length; i < len; i++) {
          console.log(keys[i]);
        }
        res.status(200).json({ keys });      
      }
    });  
  }
  