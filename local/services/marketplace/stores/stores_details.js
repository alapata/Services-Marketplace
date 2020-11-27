async function getStores(client, keys) {
    var stores = new Array();

    for (let i = 0, len = keys.length; i < len; i++) {
        stores[i] = JSON.parse(await client.get(keys[i]).then());
    }
    return stores;
}

module.exports = function(req, res) {

    const jwt = require('jsonwebtoken');
    const token = req.headers['authorization'];
    const tokenKey = require('../../helpers/constants');

    jwt.verify(token, tokenKey.tokenKey, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                mensaje: 'Token inváldo',
                err
            });
        } else {
            let redis = require('promise-redis')(),
                client = redis.createClient({
                    port: 16180,
                    host: 'redis-16180.c238.us-central1-2.gce.cloud.redislabs.com',
                    password: 'Eaf5svuXjw8LBuJuCkrFggGKvhThIM4U',
                });
            client.keys('*', async function(err, keys) {
                if (err) {
                    throw err;
                } else {
                    stores = await getStores(client, keys);
                    res.status(200).json(stores);
                }
            });
        }
    });
}