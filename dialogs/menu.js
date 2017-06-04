module.exports = function () {
    bot.dialog('/menu', [
        function (session) {
            var choices = ["Obtener Listado de Taquerias", "Obtener Listado de Taquerias por Tipo de Tacos"];
            builder.Prompts.choice(session, "Que accion le gustaria realizar?", choices, { listStyle: builder.ListStyle.button });
        },
        function (session, results) {
            if (results.response) {
                var selection = results.response.entity;
                // route to corresponding dialogs
                switch (selection) {
                    case "Obtener Listado de Taquerias":
                        session.replaceDialog('/findByLocation');
                        break;
                    case "Obtener Listado de Taquerias por Tipo de Tacos":
                        session.replaceDialog('/findByTacoType');
                        break;
                    default:
                        session.reset('/');
                        break;
                }
            }
        }
    ]);
}