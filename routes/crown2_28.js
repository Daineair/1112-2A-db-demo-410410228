var express = require('express');
var router = express.Router();

let db = require('../utils/database');

router.get('/', async function(req, res, next){
    let results = await db.query('select * from category_28')
    console.log('category data', JSON.stringify(results.rows));
    res.render('crown_28/index', { title: 'XuEn Wu',ID:'410410228' })
});

module.exports = router;