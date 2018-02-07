import sender from './sender';
import apiai from 'apiai';
import template_text from './../templates/simple_text';
import template_replies from './../templates/quick_replies';
import template_cards from './../templates/generic';
import template_image from './../templates/image';

const Factory = {
    
    send: (senderId, message) => {
      
        var api = apiai(process.env.APIAI_TOKEN, {
        	language: "en",
        	requestSource: "fb"
        });
        
        var request = api.textRequest(message, {
           sessionId: senderId 
        });
        
        request.on('response', (response) => {
            Factory.hydrate(senderId, response);
        });
        
        request.on('error', (error) => {
           console.log(error); 
        });
        
        request.end();
    },
    
    hydrate: (senderId, response) => {
        var id = response.id;
        var sessionId = response.sessionId;
        var timestamp = response.timestamp;
        var result = response.result;
        var source = result.source;
        var query = result.resolvedQuery;
        var metadata = result.metadata;
        var messages = result.fulfillment.messages;
        var status = response.status;
        
        switch (source) {
            case 'agent':
                Factory.agent(senderId, result);
                break;
            case 'domains': 
                Factory.domains(senderId, result);
                break;
            default:
                return;
        }
        
    },
    
    agent: (senderId, result) => {
        
        var messages = result.fulfillment.messages;
        var cards = [];
        
         messages.forEach((event)  => {
            event.recipientId = senderId;
            if (event.type == 0) {
                sender.facebook(template_text.message(event));
            } else if (event.type == 1) {
                cards.push(event);
            } else if (event.type == 2) {
                console.log(event);
                sender.facebook(template_replies.message(event));
            } else if (event.type == 3) {
                sender.facebook(template_image.message(event));
            }
        });
        
        if (cards.length > 0) {
            sender.facebook(template_cards.message(cards));
        }
    },
    
    domains: (senderId, result) => {
        var query = result.resolvedQuery;
        var metadata = result.metadata;
        var message = result.fulfillment.speech;
        
        sender.facebook(template_text.message({
            recipientId: senderId,
            speech: message
        }));
    }
};

export default Factory;