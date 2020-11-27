module.exports = function(req, res) {

    const jwt = require('jsonwebtoken');
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
            let redis = require('redis'),

                client = redis.createClient({
                    port: 16990,
                    host: 'redis-16990.c239.us-east-1-2.ec2.cloud.redislabs.com',
                    password: 'qYj2ElIgeEGY5fRqdGnVGWDO9zxic076',
                });

            client.keys('*', function(err, keys) {
                if (err) {
                    throw err;
                } else {
                    for (var i = 0, len = keys.length; i < len; i++) {
                        console.log(keys[i]);
                    }
                    res.status(200).json({ servicios: keys });
                }
            });
        }
    });
}