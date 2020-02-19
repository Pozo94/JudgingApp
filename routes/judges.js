var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var Judge = require('../models/judge');

// Register
router.get('/addJudge',ensureAdmin, function (req, res) {
    res.render('addJudge');
});



// Register User
router.post('/addJudge', function (req, res) {
    var login = req.body.login123;
    var password = req.body.password;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;




    var errors;

    if (errors) {
        res.render('addJudge', {
            errors: errors
        });
    }
    else {
        //checking for username is already taken
        Judge.findOne({username: login}).then(user => {

            if (user) {
                req.flash('danger', 'Username already taken!');
                res.redirect('addJudge');
            } else {

                var newUser = new Judge({
                    username: login,
                    password: password,
                    firstname: firstname,
                    lastname: lastname

                });

                Judge.createUser(newUser, function (err, user) {
                    if (err) throw err;
                    console.log(user);

                });
                req.flash('success', 'Judge created!');
                res.redirect('/judges/addJudge');
            }
        })

    }

});

router.get('/logout', function (req, res) {
    req.logout();

    req.flash('success', 'You are logged out');

    res.redirect('/users/login');
});
function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        req.flash('danger', 'Please login');
        res.redirect('/users/login');
    }
}
function loggedIn(req, res, next){
    if(req.isAuthenticated()){
        req.flash('danger', 'You are alredy logged in!');
        res.redirect('/');
    } else {

        return next();
    }
}
function ensureAdmin(req, res, next){
    if(req.user && req.user.role==='Admin'){
        return next();
    } else {
        req.flash('danger', 'Please login as admin');
        if(req.user)
            res.redirect('/')
        else
            res.redirect('/users/login');
    }
}
module.exports = router;