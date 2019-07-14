const express = require("express");
const router = express.Router();



const users = [];

router.get('/add-user', (req, res, next)=>{
    res.render('add-user',{
        pageTitle: 'Add User',
        path: '/add-user'
    });
});

router.post('/add-user', (req, res, next)=>{
    users.push({title: req.body.title});
    res.redirect('/users');
});

exports.routes = router;
exports.users = users;