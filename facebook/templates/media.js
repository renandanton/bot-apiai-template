// https://developers.facebook.com/docs/messenger-platform/reference/template/media

const Template = {
    message: (data) => {
      var template = {
        recipient: {      
            id: data.recipientId
        },
        message: {
          attachment: {
            type: "template",
            payload: {
              template_type: "media",
              elements: [
                {
                   media_type: data.type,
                   url: data.url
                }
             ]
          }
        }    
      }
      };
        
      return template;
    }
};

export default Template;