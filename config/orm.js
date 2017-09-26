var connection = require('../config/connection.js');


var orm = {

    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (burger, cb) {
        var queryString = "INSERT INTO burgers SET ?";
        connection.query(queryString, burger, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function (condition, id) {
        var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";

        connection.query(queryString, [condition, id], function (err, result) {
            if (err) {
                throw err;
            }
        });
    }
};

module.exports = orm;
