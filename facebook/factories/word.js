const Factory = {
    
    replaceUnderscore: (payload) => {
        return payload.replace(/_/g, ' ');
    },
    
    removePayload: function (payload) {
      return payload.substring(0, (payload.length - 8));
    },
    
    capitalize: (payload) => {
        return payload.replace(/(?:^|\s)\S/g, function (c) {
            return c.toUpperCase(); 
        });
    },
    
    payloadToString: (payload) => {
        var string = Factory.removePayload(payload);
        string = Factory.replaceUnderscore(string);
        string = Factory.capitalize(string);
        return string;
    },
    
    payloadToArrayString: (payload) => {
        return Factory.payloadToString(payload).split(' ');
    }
};

export default Factory;