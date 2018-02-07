/**
 * https://developers.facebook.com/docs/messenger-platform/send-api-reference/audio-attachment
 * https://developers.facebook.com/docs/messenger-platform/send-api-reference/file-attachment
 * https://developers.facebook.com/docs/messenger-platform/send-api-reference/image-attachment
 * https://developers.facebook.com/docs/messenger-platform/send-api-reference/video-attachment
 */ 

const Template = {
    message: (data) => {
        var template = {
            recipient: {
                id: data.recipientId
            },
            message: {
                attachment: {
                    type: data.type,
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