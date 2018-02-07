// https://developers.facebook.com/docs/messenger-platform/send-api-reference/button-template

const Template = {
    message: (data) => {
        var template = {
            recipient: {
                id: data.recipientId
            },
            message: {
                attachment: {
                    type: 'template',
                    payload: {
                        template_type: 'button',
                        text: data.title,
                        buttons: Template.addButtons(data.replies)
                    }
                }
            }
        };
        
        return template;
    },
    
    addButtons: (items) => {
        var buttons = [];
        
        items.forEach((button) => {
            var newButton = {
                type: button.type,
                title: String(button.title),
                payload: String(button.payload)
            };

            buttons.push(newButton);
        });
        
        return buttons;
    }
};

export default Template;