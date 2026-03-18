var express = require('express');
var router = express.Router();

/* GET adm page. */
router.get('/', function(req, res, next) {
  const vetores = [
    ['Maçã', 'Banana', 'Laranja'],
    [1, 2, 3, 4, 5],
    ['Azul', 'Verde', 'Vermelho'],
    ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
    ['🥇', '🏆', '🎖️', '🏅', '🥉']
  ];

  res.render('adm', { title: 'Administrador', vetores });
});

module.exports = router;
