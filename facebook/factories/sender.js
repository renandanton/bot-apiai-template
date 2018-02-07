import request from 'request';

const Factory = {
    
    facebook: (messageData) => {
       request({
        uri: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: process.env.ACCESS_TOKEN },
        method: 'POST',
        json: messageData
      }, (err, res, body) => {
        if (!err && res.statusCode == 200) {
          console.log('Message sent');
        } else {
          console.log(body);
        }
      });
      
      return;
    }
};

export default Factory;