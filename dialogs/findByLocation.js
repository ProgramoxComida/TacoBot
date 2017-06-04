let api = require('../rest.js');

module.exports = function () {
     bot.dialog('/findByLocation', [
        (session, args, next) => {
            session.userData.tacoType = '';
            api.getAllTaquerias().then(result => {
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
    ]);
}