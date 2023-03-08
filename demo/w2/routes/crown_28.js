var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('crown_28/index', { title: 'XuEn Wu',ID:'410410228' })
});

module.exports = router;