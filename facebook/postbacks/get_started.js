import sender from './../factories/sender';
import template_button from './../templates/generic';

const Postback = {
    hydrate:  (data) => {
        var senderId = data.senderId;
        var payload = data.payload;

        if (senderId) {
            sender.facebook(template_button.message([
                {
                    recipientId: senderId,
                    title: 'Welcome to Seda College',
                    subtitle: 'This is a restrict area for our students.', 
                    imageUrl: 'https://www.jobs.ie/logos/-2587948.png',
                    buttons: [
                        {
                            type: 'account_link',
                            url: process.env.HOST + '/account_link/authorize/'+ senderId
                        }
                    ]
                }
            ]));
        }
    },
    
    isGetStartedPayload: (payload) => {
        if (['get_started_payload'].indexOf(payload) > -1) {
            return true;      
        }
        
        return false;
    }
};

export default Postback;