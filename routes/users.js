var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Judge = require('../models/judge');
var User = require('../models/user');

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const clasA = a.lastname.toUpperCase();
    const clasB = b.lastname.toUpperCase();

    let comparison = 0;
    if (clasA > clasB) {
        comparison = 1;
    } else if (clasA < clasB) {
        comparison = -1;
    }
    return comparison;
}
//Admin
router.get('/createAdmin', function (req, res) {
    var newJudge = new Judge({
        username: 'Admin',
        password: 'Admin1',
        firstname: 'Admin',
        lastname: 'Admin',


    });

    Judge.createUser(newJudge, function (err, judge) {
        if (err) throw err;
        var newUser= new User({
            user: judge.id,
            role: 'Admin'
        });
        User.createUser(newUser, function (err, user){
            if (err) throw err;
            console.log(user);
            res.redirect('/');
        });

    });
});
// Register


// Login
router.get('/login',loggedIn, function (req, res) {
    res.render('login');
});
router.get('/addUser',ensureAdmin, function (req, res) {
    Judge.find({}, function(err, judges){
        if(err){
            console.log(err);
        } else {
            judges.sort(compare);
            console.log(judges);
            res.render('addUser', {
                title:'AddUser',
                judges: judges,

            });

        }
    });
    //res.render('addUser');
});

// Register User
router.post('/addUser', function (req, res) {
    var name = req.body.name;
    var array =name.split(' ');


    var firstname = array[0];
    var lastname = array[1];
    console.log(firstname);
    console.log(lastname);
    Judge.getUserByName(firstname,lastname,function (err,judge) {
        var newUser=new User({
            user:judge.id,
            role:req.body.role,
            apparatus:req.body.apparatus,


        })
        var query= {_id:judge.id};
        judge.status=true;
        Judge.update(query,judge,function (err) {
            if (err)
            {
                console.log(err)
                return
            }

        })
        User.createUser(newUser, function (err, user){
            if (err) throw err;
            console.log(user);
            res.redirect('/');
        });

    })



});
passport.use(new LocalStrategy(
    function (username, password, done) {
        Judge.getUserByUsername(username, function (err, user) {
            if (err) throw err;

            if (!user) {
                return done(null, false, {message: 'Unknown User'});
            }

            Judge.comparePassword(password, user.password, function (err, isMatch) {
                if (err) throw err;

                if (isMatch) {
                    User.getUserById2(user.id,function (err, user) {
                      if(err) throw err;
                      if(user){
                          return done(null, user);
                      }
                      else {
                          return done(null, false, {message: 'You arn not judging this competition!'});
                      }
                    });


                } else {
                    return done(null, false, {message: 'Invalid password'});
                }
            });
        });
    }));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.getUserById(id, function (err, user) {
        done(err, user);
    });
});

router.post('/login', function(req, res, next){
    passport.authenticate('local', {
        successRedirect:'/',
        failureRedirect:'/users/login'
    })(req, res, next);
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