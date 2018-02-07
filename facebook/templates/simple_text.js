// https://developers.facebook.com/docs/messenger-platform/send-api-reference/text-message

const Template = {
    message: (data) => {
        var template = {
            recipient: {
                id: data.recipientId
            },
            message: {
                text: data.speech
            }
        };
        
        return template;
    }
};

export default Template;