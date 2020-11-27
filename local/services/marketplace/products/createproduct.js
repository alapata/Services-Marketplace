async function getProducts(client, keys) {
    var products = new Array();

    for (let i = 0, len = keys.length; i < len; i++) {
        products[i] = JSON.parse(await client.get(keys[i]).then());
    }
    return products;
}

module.exports = function(req, res) {

    const jwt = require('jsonwebtoken');
    let body = req.body;
    const token = req.headers['authorization'];
    const tokenKey = require('../../helpers/constants');

    jwt.verify(token, tokenKey.tokenKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                mensaje: 'Token inválido',
                err
            });
        } else {
            let redis = require('promise-redis')(),

                client = redis.createClient({
                    port: 14542,
                    host: 'redis-14542.c8.us-east-1-4.ec2.cloud.redislabs.com',
                    password: 'VREdWqF5PJBYj4jRZhrVvFBdcQaWpL3k'
                });

            let jsonData = {
                id: body.id,
                name: body.name,
                image: body.image,
                description: body.description,
                categories: body.categories,
                rate: body.rate
            };

            let key = jsonData.name;

            client.set(key, JSON.stringify(jsonData),

                function(err, reply) {
                    console.log(reply);
                }
            );

            client.keys('*', async function(err, keys) {
                if (err) {
                    throw err;
                } else {
                    products = await getProducts(client, keys);
                    return res.status(200).json(products);
                }
            });
        }
    });
}