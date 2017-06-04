module.exports = function () {
    bot.dialog('/displayResults',
        (session, args, next) => {
            if (args.result) {
                let tacoType = session.userData.tacoType;
                var searchResult = JSON.parse(args.result);
                var reply = new builder.Message(session).attachmentLayout(builder.AttachmentLayout.carousel);

                if(tacoType == ""){
                    session.send("Aqui los resultados obtenidos");
                    let cards = searchResult.map((element) => {
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
                    reply.attachments(cards);
                    session.send(reply);
                    session.endConversation();
                }else{
                    session.send(`Aqui los resultados de su busqueda para Tacos de ${tacoType}`);
                    let cards = searchResult.map((element) => {
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
                    reply.attachments(cards);
                    session.send(reply);
                    session.endConversation();
                }
            } else {
                session.endConversation("Lo siento, no pude obtener informacion :(");
            }
        }
    );
}