const express = require('express');

const router = express.Router();

//loginpage

router.get('/login',function(req,res){
    res.render('login');
});

//Register Page
router.get('/register',function(req,res){
    res.render('register');
});

module.exports = router;