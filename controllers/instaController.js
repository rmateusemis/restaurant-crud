let connection = require('../config/db.js');
let instaController = {};


instaController.viewForm = (req, res) => {
    res.render('instaForm.ejs');
}

//SEND INSTA
instaController.sendForm = (req, res) => {
    let name = req.body.name;
    let path = req.file.filename;

    let sql = `INSERT INTO instagram
    (name, path)
     VALUES ('${name}', '${path}')`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
}

//LIST INSTA
instaController.viewTable = (req, res) => {
    let sql = `SELECT * FROM instagram`;
    connection.query(sql, (err, result) => {
        if (err) throw err;

        res.render('instaList.ejs', { result });
    });
}

//DELETE INSTA
instaController.deleteInsta = (req, res) => {
    let id_insta = req.params.id_insta;
    let sql = `DELETE FROM instagram WHERE id_insta = ${id_insta}`;

    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.redirect('/listInsta');
    });
}



module.exports = instaController;