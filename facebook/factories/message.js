import apiai from './apiai';

const Factory = {
    
    hydrate: (event) => {
      var senderId = event.sender.id;
      var recipientId = event.recipient.id;
      var timeOfMessage = event.timestamp;
      var message = event.message;
      var messageId = message.mid;
      var messageText = message.text;
      var attachments = message.attachments;

      if (messageText) {
        return apiai.send(senderId, messageText);
      } else if (attachments) {
        console.log(attachments);
        return;
      }
    }
};

export default Factory;