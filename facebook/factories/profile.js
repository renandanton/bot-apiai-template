import request from 'request';
import client from './redis';

const Factory = {
    setProfile: (recipientId, visa, type) => {
        client.hgetall(recipientId, function(err, replies) {
            if (!err && replies == null) {
                request({
                    uri: 'https://graph.facebook.com/v2.6/'+ String(recipientId),
                    qs: {
                        fields: 'first_name,last_name,profile_pic,locale,timezone,gender,is_payment_enabled',
                        access_token: process.env.ACCESS_TOKEN 
                    },
                    method: 'GET'
                }, (err, res, body) => {
                    if (!err && res.statusCode == 200) {
                        var data = JSON.parse(body);
                        client.hmset(recipientId, data, (err, res) => {
                            if (!err) {
                                console.log('keeped profile');
                                return;
                            }
                        });
                    } else {
                        console.log(body);
                    }
                });
            }
        });
    }
};

export default Factory;