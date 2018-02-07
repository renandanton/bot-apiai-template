import apiai from './../../factories/apiai';

const coupon_ref = [
'coupon'
];

const Referral =  {
    hydrate: function (data) {
        var senderId = data.senderId;
        var ref = data.referral.ref;
        
        if (senderId) {
           apiai.send(senderId, 'Get Started');
        }
    },
    
    isCouponRef: function (ref) {
        if (coupon_ref.indexOf(ref.split('-')[0]) > -1) {
            return true;      
        }
        
        return false;
    } 
};

export default Referral;