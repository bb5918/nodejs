const express = require('express')
const router = express.Router()
const models = require('../models');

router.get('/',(req,res)=> {
    res.send('admin app2')
})

router.get('/products',(req,res)=>{
    // res.send('admin products!!')

    const camp = "nodejs"

    res.render('admin/products.html',{
        camp
    })
})

router.get('/products/write', function(req,res){
    res.render( 'admin/form.html');
});

router.post('/products/write' , (req,res) => {
    models.Products.create({
        name : req.body.name,
        price : req.body.price ,
        description : req.body.description
    }).then( () => {
        res.redirect('/admin/products');
    });
});

module.exports = router