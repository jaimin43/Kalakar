const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
//welcome
router.get('/',function(req,res){
    res.send('index.html');
});
//dashboard
router.get('/dashboard',function(req,res){
    res.render('dashboard',{
        name : req.user.name
    });
});


      /* GET Profile page. */ 

module.exports = router;