// https://developers.facebook.com/docs/messenger-platform/identity/account-linking

const Template = {
    message: (data) => {
        
        var template = {
            psid: data.recipientId
        };
        
        return template;
    }
};

export default Template;