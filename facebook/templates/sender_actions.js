// https://developers.facebook.com/docs/messenger-platform/send-api-reference/sender-actions

const Template = {
    message: (recipientId, action) => {
        var template = {
            recipient: {
                id: recipientId
            },
            sender_action: action
        };
        
        return template;
    }
};

export default Template;