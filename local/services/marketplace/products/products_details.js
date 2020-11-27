async function getProducts(client, keys) {
    var products = new Array();

    for (let i = 0, len = keys.length; i < len; i++) {
        products[i] = JSON.parse(await client.get(keys[i]).then());
    }
    return products;
}

module.exports = function(req, res) {
    let redis = require('promise-redis')(),

        client = redis.createClient({
            port: 14542,
            host: 'redis-14542.c8.us-east-1-4.ec2.cloud.redislabs.com',
            password: 'VREdWqF5PJBYj4jRZhrVvFBdcQaWpL3k',
        });

    client.keys('*', async function(err, keys) {
        if (err) {
            throw err;
        } else {
            products = await getProducts(client, keys);
            res.status(200).json(products);
        }
    });
}