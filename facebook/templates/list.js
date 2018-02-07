// https://developers.facebook.com/docs/messenger-platform/send-api-reference/list-template

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
                        template_type: 'list',
                         top_element_style: 'compact',
                        elements: Template.addElements(data),
                        buttons: [
                            {
                                type: 'element_share'
                            }              
                        ]
                    }
                }
            }
        };
        
        return template;
    },
    
    addElements: (data) => {
        var elements = [];
        
        data.items.forEach((item) => {
            var newItem = {
                title: item.time,
                image_url: 'http://img.freeflagicons.com/thumb/two_wavy_flags/ireland/ireland_640.png',
                subtitle: data.type+ ' ' +data.visa+ ' Visa.'
            };
            
            elements.push(newItem);
        });
        
        return elements;
    }
};

export default Template;