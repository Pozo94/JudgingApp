var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
var Judge = require('../models/judge');
var User = require('../models/user');
var validator = require('validator');

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const clasA = a.apparatus;
    const clasB = b.apparatus;

    let comparison = 0;
    if (clasA > clasB) {
        comparison = 1;
    } else if (clasA < clasB) {
        comparison = -1;
    }
    return comparison;
}
router.get('/', function (req, res) {
    User.find({role:{$ne:'Admin'}},function (err,judges) {
        judges.sort(compare);
        res.render('jlist', {
            title:'List of judges',
            judges: judges,

        });

    })



});

// Register
router.get('/addJudge',ensureAdmin, function (req, res) {
    res.render('addJudge');
});



// Register User
router.post('/addJudge', function (req, res) {
    var login = req.body.login123;
    var password = req.body.password;
    var password2= req.body.password2;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;




    var errors;

    if (errors ||!validator.isAlpha(firstname,['pl-PL'])||!validator.isAlpha(lastname,['pl-PL'])  ) {
        if(validator.isAlpha(firstname,['pl-PL'])&&validator.isAlpha(lastname,['pl-PL'])){
            res.redirect('/judges/addJudge', {
                errors: errors
            });
        }else{
            req.flash('danger', 'Wrong data!');
            res.redirect('/judges/addJudge');
        }

    }
    else {
        //checking for username is already taken
        Judge.findOne({username: login}).then(user => {

                if(password===password2){

                    if (user) {
                        req.flash('danger', 'Username already taken!');
                        res.redirect('/judges/addJudge');
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
                }
                else{

                    req.flash('danger', 'Passwords doesnt match!');
                    res.redirect('/judges/addJudge');
                }
            });



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