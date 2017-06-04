let api = require('./rest.js');

api.getTacosByType("Costilla").then(resp => {
    let cards = resp.map((element) => {
        return element.name
    });
    console.log(cards);
})