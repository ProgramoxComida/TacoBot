let request = require('request');

module.exports = {
    "getTacosByType": function getTacosByType (type) {
        return new Promise((resolve, reject) => {
            request.get({
                url: `http://localhost:3000/places?type_like=${type}`
            }, (err, res) => {
                resolve(res.body)
            })
        });
    },
    "getAllTaquerias": function getAllTaquerias () {
        return new Promise((resolve, reject) => {
            request.get({
                url: `http://localhost:3000/places`
            }, (err, res) => {
                resolve(res.body);
            })
        });
    }
}