var express = require('express');
var router = express.Router();
var Current_Edition=require('../models/I_Edition');
// var II_Edition=require('../models/II_Edition');
// var III_Edition=require('../models/III_Edition');
// var IV_Edition=require('../models/IV_Edition');

router.get('/',ensureAuthenticated, function(req, res) {
    res.render('division');
});
router.get('/div1',ensureAuthenticated, function(req, res) {
    res.render('judging');
});
router.get('/div2',ensureAuthenticated, function(req, res) {
    res.render('judging');
});
router.get('/div1/I',ensureAuthenticated, function(req, res){
    Current_Edition.find({subdivision:'I'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {

            res.render('protocol', {
                title:'Rzut I zastęp I',
                competitors: competitors,

            });

        }
    });

});
router.get('/div1/II',ensureAuthenticated, function(req, res){
    Current_Edition.find({subdivision:'II'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {

            res.render('protocol', {
                title:'Rzut I zastęp II',
                competitors: competitors,

            });

        }
    });

});
router.get('/div1/III',ensureAuthenticated, function(req, res){
    Current_Edition.find({subdivision:'III'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {

            res.render('protocol', {
                title:'Rzut I zastęp III',
                competitors: competitors,

            });

        }
    });

});
router.get('/div1/IV',ensureAuthenticated, function(req, res){
    Current_Edition.find({subdivision:'IV'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {

            res.render('protocol', {
                title:'Rzut I zastęp IV',
                competitors: competitors,

            });

        }
    });

});
router.get('/div1/V',ensureAuthenticated, function(req, res){
    Current_Edition.find({subdivision:'V'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {

            res.render('protocol', {
                title:'Rzut I zastęp V',
                competitors: competitors,

            });

        }
    });

});
router.get('/div1/VI',ensureAuthenticated, function(req, res){
    Current_Edition.find({subdivision:'VI'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {

            res.render('protocol', {
                title:'Rzut I zastęp VI',
                competitors: competitors,

            });

        }
    });

});
router.get('/div2/I',ensureAuthenticated, function(req, res){
    Current_Edition.find({subdivision:'VII'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {

            res.render('protocol', {
                title:'Rzut II zastęp I',
                competitors: competitors,

            });

        }
    });

});
router.get('/div2/II',ensureAuthenticated, function(req, res){
    Current_Edition.find({subdivision:'VIII'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Rzut II zastęp II',
                competitors: competitors,

            });

        }
    });

});

router.get('/div2/III',ensureAuthenticated, function(req, res){
    Current_Edition.find({subdivision:'IX'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Rzut II zastęp III',
                competitors: competitors,

            });

        }
    });

});
router.get('/div2/IV',ensureAuthenticated, function(req, res){
    Current_Edition.find({subdivision:'X'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Rzut II zastęp IV',
                competitors: competitors,

            });

        }
    });

});
router.get('/div2/V',ensureAuthenticated, function(req, res){
    Current_Edition.find({subdivision:'XI'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Rzut II zastęp V',
                competitors: competitors,

            });

        }
    });

});
router.get('/div2/VI',ensureAuthenticated, function(req, res){
    Current_Edition.find({subdivision:'XII'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Rzut II zastęp VI',
                competitors: competitors,

            });

        }
    });

});



function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated() &&  req.user.role!=='Admin'){
        return next();
    } else {
        //req.flash('error_msg','You are not logged in');
        res.redirect('/users/login');
    }
}

module.exports = router;