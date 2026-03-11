var express = require('express');
var router = express.Router();

/* GET adm page. */
router.get('/', function(req, res, next) {
  res.render('adm', { title: 'Administrador' });
});

module.exports = router;
