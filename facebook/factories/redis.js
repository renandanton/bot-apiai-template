import redisOptions from './../../config/adapters/redis';

var redis = require('redis').createClient(redisOptions);

redis.on("error", (err) => {
    console.log("Error " + err);
});

export default redis;