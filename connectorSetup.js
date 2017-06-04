module.exports = function () {
    global.restify = require('restify');
    global.builder = require('botbuilder');
    global.locationDialog = require('botbuilder-location');

    // Create chat connector for communicating with the Bot Framework Service
    var connector = new builder.ChatConnector({
        appId: process.env.MICROSOFT_APP_ID,
        appPassword: process.env.MICROSOFT_APP_PASSWORD
    });

    global.bot = new builder.UniversalBot(connector);

    global.bot.library(locationDialog.createLibrary(process.env.BING_MAPS_API_KEY));

    // Setup Restify Server
    var server = restify.createServer();
    server.use(restify.acceptParser(server.acceptable));
    server.use(restify.queryParser());
    server.use(restify.bodyParser()); 
    server.listen(process.env.port || 3978, function () {
        console.log('%s listening to %s', server.name, server.url);
    });
    server.post('/api/messages', connector.listen());
}