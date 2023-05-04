var express = require('express');
var router = express.Router();

let db = require('../utils/database');

//CREATE

//READ
router.get('/', async function(req, res, next){
    try {
        let results = await db.query('select * from category2_28');
        //console.log('category data', JSON.stringify(results.rows));
        res.render('crown2_28/index', { 
            data: results.rows,
            title: 'XuEn Wu',
            ID:'410410228' 
        });
    }catch(error){
        console.log(error);
    }
    
    
});

router.get('/shop2_28', async function (req, res, next){
    try {
        let results = await db.query(`select * from shop2_28`);
        console.log('results', JSON.stringify(results.rows));
        //res.json(results.rows);
        res.render('crown2_28/shop2_28',{
            data:results.rows,
            category: "All Products",
            title: 'XuEn Wu',
            ID:'410410228',
        });
    }catch(error){
        console.log(error);
    }
});

router.get('/shop2_28/:category', async function (req, res, next){
    console.log('category', req.params.category);
    try {
        let results = await db.query(`
            select C.name as category, S.id, S.name, price, S.local_url 
            from category2_28 as C, shop2_28 as S
            where S.cat_id = C.id and C.name = $1
        `, [req.params.category]);
        console.log('results', JSON.stringify(results.rows));
        //res.json(results.rows);
        res.render('crown2_28/shop2_28',{
            data:results.rows,
            category: req.params.category,
            title: 'XuEn Wu',
            ID:'410410228',
        });
    }catch(error){
        console.log(error);
    }
});

//UPDATE

//DELETE

module.exports = router;