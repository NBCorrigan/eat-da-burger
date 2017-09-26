//importing the ORM to create the functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", cols, vals, function (res) {
            cb(res);
        });
    }
};
