# Chatbot Template Apiai

Chatbot template instantly integration with dialogflow (api.ai).

## Description

This is a simple chatbot template with integration with api.ai and facebook messenger platform.

## Requeriments

You need install this softwares in your computer.

    $ node v6.7.0 or higher

    $ npm 3.10.3

    $ redis 3.0

    $ git client


## Installation


Clone the repository project:

    $ git clone https://github.com/renandanton/bot-apiai-template.git

Enter in project directory,

    $ cd bot-apiai-template

And then execute:

    $ npm install

Now, change redis configuration file if you need in ***config/adpters/redis.js***:

``` javascript
var redisOptions = {
  host: '127.0.0.1',
  port: 6379
};
```

Please build your server before start:

    $ npm run build


Before your start your server you must set some environment variables listed below:

| VARIABLE NAME |                  DESCRIPTION                |             EXAMPLE VALUE          |
| :-----------: | :-----------------------------------------: | :---------------------------------:|
| ACESS_TOKEN   | Facebook Page Access Token                  | EAARqOCc8LeQBAFeOWDq4IzHAmwZDZD    |
| APIAI_TOKEN   | Apiai Client access token                   | f26ff721ac684bb4ac0df57e500bae66   |
| TOKEN         | A Generate Token For Your Chatbot           | g8AXAjXhPgZ7yCgW2MUgU29F5XvcRq     |
| HOST          | Your host domain where api will be host     | https://mydomain.com               |


and finally run the web server:

    $ npm run serve


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/renandanton/bot-apiai-template.git. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).