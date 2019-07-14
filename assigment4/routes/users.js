const express = require("express");
const router = express.Router();

const userData = require('./admin');

router.get('/users', (req, res, next)=>{
    const users = userData.users;
    res.render('users', {
        users: users,
        pageTitle: 'Users',
        path: '/users',
    });
});

module.exports = router;
