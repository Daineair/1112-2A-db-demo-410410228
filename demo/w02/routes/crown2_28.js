var express = require('express');
var router = express.Router();

let db = require('../utils/database');

router.get('/', async function(req, res, next){
    try {
        let results = await db.query('select * from category_28');
        console.log('category data', JSON.stringify(results.rows));
        res.render('crown2_28/index', { 
            data: results.rows,
            title: 'XuEn Wu',
            ID:'410410228' 
        });
    }catch(error){
        console.log(error);
    }
    
    
});

module.exports = router;