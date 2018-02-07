// https://developers.facebook.com/docs/messenger-platform/send-api-reference/generic-template

const Template = {
    message: (data) => {
        var template = {
            recipient: {
                id: data[0].recipientId
            },
            message: {
                attachment: {
                    type: 'template',
                    payload: {
                        template_type: 'generic',
                        elements: Template.addElements(data)
                    }
                }
            }
        };
        
        return template;
    },
    
    addElements: (data) => {
        var elements = [];
        
        data.forEach( (element) => {
            var newElement = {
                title: element.title
            };
            
            if (element.subtitle) {
                newElement.subtitle = element.subtitle;
            }
            
            if (element.imageUrl) {
                newElement.image_url = element.imageUrl;
            }
            
            if (element.buttons) {
                newElement.buttons = Template.addButtons(element.buttons);
            }
            
            elements.push(newElement);
        });
        
        return elements;
    },
    
    addButtons: (buttons) => {
        var arrayButtons = [];
        
        buttons.forEach( (button) => {
            var itemButton = {
                title: button.text                 
            };
             
            
            if (Template.isUrl(button.postback)) {
                itemButton.type = 'web_url';
                itemButton.url = button.postback;
                itemButton.messenger_extensions = true;
                itemButton.webview_height_ratio = 'full';
            } else if (button.postback == 'element_share') {
                itemButton.type = button.postback;
            } else {
                itemButton.type = 'postback';
                itemButton.payload = button.postback;
            }
             
            arrayButtons.push(itemButton); 
         });
         
         return arrayButtons;
    }, 
    
    isUrl: (string) => {
        var regexp = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
        return regexp.test(string);
    }
};

export default Template;
