var express = require('express');
var router = express.Router();
let multer = require('multer');

var storage = multer.diskStorage({
    destination: 'public/images',
    filename: function(req, file, cb) {
        const extension = file.originalname.slice(
            file.originalname.lastIndexOf(".")
        )
        cb(null, Date.now() + extension)
    }
})
var upload = multer({ storage: storage }).single('avatar');


//INDEX METHODS
let IndexController = require('../controllers/indexController.js');

router.get('/', IndexController.viewIndex);



//CHEF METHODS
let chefController = require('../controllers/chefController.js');

router.get('/addChef', chefController.viewForm);

router.post('/addChef', chefController.sendForm);

router.get('/listChef', chefController.viewTable);

router.get('/deleteChef/:id_chef', chefController.deleteChef);

//FOOD METHODS
let foodController = require('../controllers/foodController.js');

router.get('/addFood', foodController.viewForm);

router.post('/addFood', foodController.sendForm);

router.get('/listFood', foodController.viewTable);

router.get('/deletefood/:id_food', foodController.deleteFood);

//INSTA METHODS
let instaController = require('../controllers/instaController.js');

router.get('/addInsta', instaController.viewForm);

router.post('/addInsta', upload, instaController.sendForm);

router.get('/listInsta', instaController.viewTable);

router.get('/deleteInsta/:id_insta', instaController.deleteInsta);


module.exports = router;
