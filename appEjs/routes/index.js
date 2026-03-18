var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const vetores = [
    ['Maçã', 'Banana', 'Laranja'],
    [1, 2, 3, 4, 5],
    ['Azul', 'Verde', 'Vermelho'],
    ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
    ['🥇', '🏆', '🎖️', '🏅', '🥉']
  ];

  res.render('index', { title: 'Express', vetores });
});

module.exports = router;
