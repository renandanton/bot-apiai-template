import get_started from './../postbacks/get_started';

const Factory = {
     hydrate: (event) => {
      var senderId = event.sender.id;
      var recipientId = event.recipient.id;
      var timeOfMessage = event.timestamp;
      var postback = event.postback;
      var payload = postback.payload;

      if (postback.payload) {
        if (get_started.isGetStartedPayload(payload)) {
            get_started.hydrate({
                senderId: senderId,
                payload: postback.payload
            });
        }
      }
    }
};

export default Factory;