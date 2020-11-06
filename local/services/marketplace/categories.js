module.exports = function(req, res) {

    let redis = require('../../node_modules/redis'),

        client = redis.createClient({
            port: 13697,
            host: 'redis-13697.c240.us-east-1-3.ec2.cloud.redislabs.com',
            password: '5AayTYBRQALiVY2I8dkkqiesuwKQSCVO',
        });

    client.keys('*', function(err, keys) {
        if (err) {
            throw err;
        } else {
            for (var i = 0, len = keys.length; i < len; i++) {
                console.log(keys[i]);
            }
            res.status(200).json({ categorias: keys });
        }
    });
}