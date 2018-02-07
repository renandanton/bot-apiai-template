// https://developers.facebook.com/docs/messenger-platform/send-api-reference/quick-replies

const Template = {
    message: (data) => {
        var template = {
            recipient: {
                id: data.recipientId
            },
            message: {
                text: data.title,
                quick_replies: this.addReplies(data.replies)
            }
        };
        
        return template;
    },
    
    addReplies: (items) => {
        var replies = [];
        
        items.forEach((reply) => {
            
            var newReply = {
                content_type: 'text',
                title: String(reply),
                payload: String(reply).replace(/ /g, '_').toLowerCase() + '_payload'
            };
            
            replies.push(newReply);
        });
        
        return replies;
    }
};

export default Template;