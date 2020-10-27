const express = require('express')
const router = express.Router()
const models = require('../models');

router.get('/',(req,res)=> {
    res.send('admin app2')
})
router.get( '/products' , async ( _ ,res) => {
 
    try{
 
        const products = await models.Products.findAll();
        // console.log(models.Products.findAll())
        res.render( 'admin/products.html' , { products });
 
    }catch(e){
 
    }
 
});
 
router.get('/products/write', ( _ , res ) => {
    res.render( 'admin/form.html');
});
 
router.post('/products/write' , async (req,res) => {
 
    try{
 
        await models.Products.create(req.body);
        res.redirect('/admin/products');
 
    }catch(e){
 
    }
});
 
router.get('/products/detail/:id' , async(req, res) => {
 
    try{
 
        const product = await models.Products.findByPk(req.params.id);
        res.render('admin/detail.html', { product });  
 
    }catch(e){
 
    }
 
    
});
 
router.get('/products/edit/:id' , async(req, res) => {
 
    try{
 
        const product = await models.Products.findByPk(req.params.id);
        res.render('admin/form.html', { product });  
 
    }catch(e){
 
    }
 
    
});
 
router.post('/products/edit/:id' , async(req, res) => {
 
    try{
 
        await models.Products.update(
            req.body , 
            { 
                where : { id: req.params.id } 
            }
        );
        res.redirect('/admin/products/detail/' + req.params.id );
 
    }catch(e){
 
    }
 
});
 
router.get('/products/delete/:id', async(req, res) => {
 
    try{
 
        await models.Products.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect('/admin/products');
 
    }catch(e){
 
    }
 
});
 

module.exports = router