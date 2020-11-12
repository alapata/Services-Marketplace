module.exports = function(req, res) {

    const jwt = require('jsonwebtoken');
    let body = req.body;
    const token = req.headers['authorization'];
    const tokenKey = require('../helpers/constants');
    
    jwt.verify(token, tokenKey.tokenKey, (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    
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

    client.set(key, JSON.stringify(jsonData),
        function(err, reply) {
            console.log(reply);
        });


    res.status(200).json({
        Categoria: jsonData,
        token
    });
}