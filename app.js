require('./connectorSetup.js')();
require('./dialogs/help.js')();
require('./dialogs/menu.js')();
require('./dialogs/findByLocation.js')();
require('./dialogs/findByTacoType.js')();
require('./dialogs/displayResults.js')();

bot.endConversationAction('goodbye', 'Goodbye :)', { matches: /^bye/i });
bot.beginDialogAction('home', '/start', { matches: /^home/i });
bot.beginDialogAction('menu', '/menu', { matches: /^menu/i });
// bot.beginDialogAction('help', '/help', { matches: /^help/i }); 

// Install a custom recognizer to look for user saying 'help' or 'goodbye'.
/*bot.recognizer({
  recognize: function (context, done) {
  var intent = { score: 0.0 };

        if (context.message.text) {
            switch (context.message.text.toLowerCase()) {
                case /hola|hi|bonjour/:
                    intent = { score: 1.0, intent: 'HelloIntent' };
                    break;
                case 'help':
                    intent = { score: 1.0, intent: 'HelpIntent' };
                    break;
                case 'goodbye':
                    intent = { score: 1.0, intent: 'GoodbyeIntent' };
                    break;
                case 'cancel':
                    intent = { score: 1.0, intent: 'CancelIntent' };
                    break;
            }
        }
        done(null, intent);
    }
});*/
// Add a help dialog with a trigger action that is bound to the 'Help' intent
bot.dialog('cancelDialog', function (session) {
    session.endDialog("This bot will echo back anything you say. Say 'goodbye' to quit.");
}).triggerAction({ matches: 'CancelIntent' });


bot.dialog('/', [
    (session) => {
        session.replaceDialog('/start');
    }
]);

bot.dialog('/start', [
    (session) => {
        session.send("Yo soy Taco Bot, su proveedor de informacion sobre Tacos!\n Mi proposito en la vida es ayuarte a encontrar informacion sobre los mejores tacos en la Ciudad de Mexico."); 
        session.sendTyping();
        if (!session.userData.name) {
            session.replaceDialog('/profile');
        } else {
            session.replaceDialog('/help');
        }
    }  
]);

bot.dialog('/profile', [
    (session) => {
        session.send("Antes de comenzar, requiero de algunos datos muy importantes para brindarte un mejor servicio, asi que comencemos :-)");
        builder.Prompts.text(session, 'Hola! Cual es tu nombre?');
    },
    function (session, args, next) {
        if (!session.userData.phone) {
            builder.Prompts.text(session, 'Proporciona un numero telefonico');
        } else {
            next();
        }
    },
    function (session, results) {
        session.userData.phone = results.response;
        session.endDialog();
        session.beginDialog('/menu');
    }
]);