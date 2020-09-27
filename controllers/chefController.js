let connection = require('../config/db.js');
let chefController = {};


chefController.viewForm = (req, res) => {
    res.render('chefForm.ejs')
}

//SEND CHEF
chefController.sendForm = (req, res) => {
    const { name, last_name, speciality, year, description } = req.body;

    let sql = `INSERT INTO chef 
    (name, last_name, speciality, year, description)
     VALUES ('${name}', '${last_name}', '${speciality}', ${year}, '${description}')`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
}

//LIST CHEFS
chefController.viewTable = (req, res) => {
    let sql = `SELECT * FROM chef`;
    connection.query(sql, (err, result) => {
        if (err) throw err;

        res.render('chefList.ejs', { result });
    });
}

//DELETE CHEFS
chefController.deleteChef = (req, res) => {
    let id_chef = req.params.id_chef;
    let sql = `DELETE FROM chef WHERE id_chef = ${id_chef}`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.redirect('/listChef')
    })
}



module.exports = chefController;