let connection = require('../config/db.js');

let IndexController = {};

IndexController.viewIndex = (req, res) => {
    let sql = `SELECT * FROM food`;
    let sql2 = `SELECT * FROM instagram`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        connection.query(sql2, (err, result1) => {
            if (err) throw err;

            res.render('index.ejs', { result: result, result1: result1 })
        })
    });
}

module.exports = IndexController;