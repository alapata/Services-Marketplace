module.exports = function(req, res) {

    let body = req.body;

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

            let key = body.name;

            if (key === undefined) {

                return res.status(400).json({
                    ok: false,
                    mensaje: 'El nombre (name) del servicio a eliminar es necesario'
                });

            }

            client.del(key, (err, reply) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'No fue posible hacer la eliminación',
                        err
                    });
                }

                if (reply === 0) {
                    console.log(reply);
                    console.log('No se encontró el servicio a eliminar');

                    return res.status(404).json({
                        ok: false,
                        mensaje: 'No se encontró el servicio a eliminar'
                    });
                }

                return res.status(200).json({
                    ok: true,
                    key,
                    mensaje: 'Borrado'
                });
            });
        }
    });
}