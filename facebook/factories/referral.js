import coupon from './../referrals/code/coupon';

const Factory = {
    hydrate: (event) => {
      var senderId = event.sender.id;
      var recipientId = event.recipient.id;
      var timeOfMessage = event.timestamp;
      var referral = event.referral;
      var source = referral.source;    
        
      if (source == 'MESSENGER_CODE') {
        // Put your message code logic here
        if (coupon.isCouponRef(referral.ref)) {
            coupon.hydrate({
                senderId: senderId,
                referral: referral
            });
        }
      } else if (source == 'SHORTLINK') {
          // Put your shortlink logic here
          return;
      } else if (source == 'ADS') {
          // Put your ads logic here
          return;
      }
    }
};

export default Factory;