module.exports = function(req, res) {
    console.log('Entró a storesService/stores.js');

    const jwt = require('jsonwebtoken');
    const token = req.headers['authorization'];
    const tokenKey = require('../../helpers/constants');

    jwt.verify(token, tokenKey.tokenKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                mensaje: 'token inválido',
                err
            });
        } else {
            let redis = require('redis'),

                client = redis.createClient({
                    port: 16180,
                    host: 'redis-16180.c238.us-central1-2.gce.cloud.redislabs.com',
                    password: 'Eaf5svuXjw8LBuJuCkrFggGKvhThIM4U',
                });

            client.keys('*', function(err, keys) {
                if (err) {
                    throw err;
                } else {
                    for (var i = 0, len = keys.length; i < len; i++) {
                        console.log(keys[i]);
                    }
                    res.status(200).json({ keys });
                }
            });
        }
    });


}