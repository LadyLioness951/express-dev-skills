var express = require('express');
var router = express.Router();
const skillCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillCtrl.index);
router.get('/', skillCtrl.show);

module.exports = router;
