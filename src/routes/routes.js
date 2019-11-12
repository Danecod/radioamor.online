const express = require('express');
const router =express.Router();

router.get('/',(req,res)=>{
    res.render('index.html' , {title:'hola'})
})

router.get('/contact' , (req,res)=>{
    res.render('contact.html' ,{title:'contact page'})
})

router.get('/nosotros' , (req,res)=>{
    res.render('nosotros.html' ,{title:'contact page'})
})

module.exports = router;