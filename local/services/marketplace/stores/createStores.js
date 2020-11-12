module.exports = function (req, res) {
  
    let redis = require('redis'),
  
      client = redis.createClient({
        port: 16180,
        host: 'redis-16180.c238.us-central1-2.gce.cloud.redislabs.com',
        password: 'Eaf5svuXjw8LBuJuCkrFggGKvhThIM4U',
      });
      
      let jsonData = require('./stores.json');
      
      for(var i = 0; i < jsonData.length; i++) {
        let key =  jsonData[i].name;
        let json = jsonData[i];
        client.set(key, JSON.stringify(json),
        function(err, reply) {
          console.log(reply);
        });
      }    
      res.status(200).json({ jsonData });
  }
  