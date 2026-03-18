var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const vetores = [
    ['Maçã', 'Banana', 'Laranja'],
    [1, 2, 3, 4, 5],
    ['Azul', 'Verde', 'Vermelho'],
    ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
    ['🥇', '🏆', '🎖️', '🏅', '🥉']
  ];

  res.render('users', { title: 'Users', vetores });
});

module.exports = router;
