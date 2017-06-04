module.exports = function () {
    bot.dialog('/help', [
        function (session) {
            session.endDialog("Comandos globales disponibles en cualquier momento:\n\n* menu - Muestra las opciones para encontrar Taquerias.\n* goodbye - Finaliza la conversacion.\n* help - Muestra la lista de comandos.");
        }
    ]);
}