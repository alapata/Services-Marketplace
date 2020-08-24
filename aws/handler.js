'use strict';

async function getStores(client, keys) {
  var stores = new Array();

  for(let i = 0, len = keys.length; i < len; i++) {
    stores[i] = await client.get(keys[i]).then();
  }
  return stores;
}


module.exports.hello = async event => {
  
  
  let redis = require('promise-redis')(),
  
  client = redis.createClient({
    port: 16180,
    host: 'redis-16180.c238.us-central1-2.gce.cloud.redislabs.com',
    password: 'Eaf5svuXjw8LBuJuCkrFggGKvhThIM4U',
  });

  client.keys('*', async function (err, keys) {
    if (err) {
      throw err;
    } else {
      stores = await getStores(client, keys);      
      return {
        statusCode: 200,
        body: JSON.stringify(stores),
      };      
    }
});  

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
