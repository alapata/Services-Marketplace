module.exports = function(req, res) {

    const jwt = require('jsonwebtoken');
    let body = req.body;

    let redis = require('redis'),


        client = redis.createClient({
            port: 13697,
            host: 'redis-13697.c240.us-east-1-3.ec2.cloud.redislabs.com',
            password: '5AayTYBRQALiVY2I8dkkqiesuwKQSCVO',
        });

    let jsonData = {
        id: body.id,
        name: body.name,
        image: body.image
    };

    let token = jwt.sign({

        usuario: jsonData

    }, 'este-es-el-seed-desarrollo', { expiresIn: 60 * 60 * 24 * 30 });

    let key = jsonData.name;


    client.set(key, JSON.stringify(jsonData),
        function(err, reply) {
            console.log(reply);
        });


    res.status(200).json({
        Categoria: jsonData,
        token
    });
}