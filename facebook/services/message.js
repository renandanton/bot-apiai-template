import factoryMessage  from './../factories/message';
import factoryPostback from './../factories/postback';
import factoryReferral from './../factories/referral';
import action from './../factories/action';

const Service = (req, res, next) => {
  var data = req.body;
  
  if (data && data.object === 'page') {
    data.entry.forEach( (entry) => {
      var pageID = entry.id;
      var timeOfEvent = entry.timestamp;
      
      entry.messaging.forEach((event) => {
        if (event.message) {
            factoryMessage.hydrate(event);
        } else if (event.postback) {
            factoryPostback.hydrate(event);
        } else if (event.referral) {
            factoryReferral.hydrate(event);
        }
      });
    });
    res.sendStatus(200);
  }
};

export default Service;