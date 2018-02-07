// https://developers.facebook.com/docs/messenger-platform/send-api-reference/image-attachment

const Template = {
    message: (data) => {
        var template = {
            recipient: {
                id: data.recipientId
            },
            message: {
                attachment: {
                    type: 'image',
                    payload: {
                        url: data.imageUrl
                    }
                }
            }
        };
        
        if (data.is_reusable) {
            template.message.attachment.payload.is_reusable = data.is_reusable;
        }
        
        return template;
    }
};

export default Template;