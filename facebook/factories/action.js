import template_actions from './../templates/sender_actions';
import sender from './sender';

const Factory = {
    
    markSeen: (recipientId) => {
      sender.facebook(template_actions.message(recipientId, 'mark_seen'));
      return;
    },
    
    typingOff: (recipientId) => {
      sender.facebook(template_actions.message(recipientId, 'typing_off'));
    },
    
    typingOn: (recipientId) => {
      sender.facebook(template_actions.message(recipientId, 'typing_on'));
    }
};

export default Factory;