let connection = require('../config/db.js');
let foodController = {};


foodController.viewForm = (req, res) => {
    res.render('foodForm.ejs')
}

//SEND food
foodController.sendForm = (req, res) => {
    const { name, price, type } = req.body;

    let sql = `INSERT INTO food 
    (name, price, type)
     VALUES ('${name}', ${price}, '${type}')`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(sql);
        res.redirect('/');
    });
}

//LIST food
foodController.viewTable = (req, res) => {
    let sql = `SELECT * FROM food`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.render('foodList.ejs', { result });
    });
}

//DELETE foodS
foodController.deleteFood = (req, res) => {
    let id_food = req.params.id_food;
    let sql = `DELETE FROM food WHERE id_food = ${id_food}`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.redirect('/listfood');
    })
}



module.exports = foodController;