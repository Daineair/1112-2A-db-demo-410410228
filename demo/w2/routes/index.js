var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'XuEn Wu',ID:'410410228' });
});

module.exports = router;
