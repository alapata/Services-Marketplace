async function getProducts(client, keys) {
    var products = new Array();
  
    for(let i = 0, len = keys.length; i < len; i++) {
      products[i] = JSON.parse(await client.get(keys[i]).then());
    }
    return products;
  }
  
  
  
  module.exports = function (req, res) {
      let redis = require('../../../node_modules/promise-redis')(),
    
        client = redis.createClient({
          port: 13697,
          host: 'redis-13697.c240.us-east-1-3.ec2.cloud.redislabs.com',
          password: '5AayTYBRQALiVY2I8dkkqiesuwKQSCVO',
        });
      
      client.keys('*', async function (err, keys) {
        if (err) {
          throw err;
        } else {
          products = await getProducts(client, keys);
          res.status(200).json(products);      
        }
      });  
    }