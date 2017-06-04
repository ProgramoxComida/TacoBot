let api = require('../rest.js');

module.exports = function () {
     bot.dialog('/findByTacoType', [
        (session, args, next) => {
            session.userData.tacoType = '';
            var choices = ["Pastor", "Suadero", "Costilla", "Bistec", "Pechuga"];
            builder.Prompts.choice(session, "Que tipo de Taco esta buscando?", choices, { listStyle: builder.ListStyle.button });
        },
        (session, results, next) => {
            if (results.response) {
                let selection = results.response.entity;
                session.userData.tacoType = selection;
                // Connected to API
                api.getTacosByType(selection).then(result => {
                    session.replaceDialog('/displayResults', { result });
                    /*let cards = result.map((element) => {
                        return new builder.HeroCard(session)
                            .title(element.name)
                            .subtitle(element.address)
                            .images([
                                builder.CardImage.create(session, `http://localhost:3000${element.media.header}`)
                            ]);
                            // .buttons([
                                //builder.CardAction.dialogAction(session, "PropertyDetails", "", "Find Out More")
                                //builder.CardAction.openUrl(session, "https://www.bing.com", "Click Here")
                            //])
                    });

                    var reply = new builder.Message(session)
                    .attachmentLayout(builder.AttachmentLayout.carousel)
                    .attachments(cards);
                    session.send(reply);*/
                })
                .catch(error => {
                    session.send("No se pudo encontrar informacion");
                    session.send(error);
                    session.endConversation();
                });
            }
        }
    ]);
}