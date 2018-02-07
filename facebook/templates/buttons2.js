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
                        template_type: "button",
                        text: data.text,
                        buttons: Template.addButtons(data.buttons)
                    }
                }
            }
        };
        
        return template;
    },
    
    addButtons: (items) => {
        var buttons = [];
        
        items.forEach(function (button) {
            
            var newButton = {
                type: button.type,
            };
            
            if (button.title) {
                newButton.title = String(button.title)
            }
            
            if (button.type == 'postback') {
                newButton.payload = String(button.payload);
            }
            
            if ((button.type == 'web_url') || (button.type == 'account_link')) {
                newButton.url = button.url;
            }
            
            if (button.webview_height_ratio) {
                newButton.webview_height_ratio = button.webview_height_ratio;
            }
            
            if (button.messenger_extensions) {
                newButton.messenger_extensions = button.messenger_extensions;
            }

            buttons.push(newButton);
        });
        
        return buttons;
    }
};

export default Template;