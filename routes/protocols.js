var express = require('express');
var router = express.Router();
var Current_Edition=require('../models/IV_Edition');
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
router.get('/div3',ensureAuthenticated, function(req, res) {
    res.render('judging');
});
router.get('/div1/I',ensureAuthenticated, function(req, res){
    Current_Edition.find({subdivision:'I'}).sort('order').exec(function (err, competitors) {
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
    Current_Edition.find({subdivision:'II'}).sort('order').exec(function (err, competitors) {
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
    Current_Edition.find({subdivision:'III'}).sort('order').exec(function (err, competitors) {
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
    Current_Edition.find({subdivision:'IV'}).sort('order').exec(function (err, competitors) {
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
    Current_Edition.find({subdivision:'V'}).sort('order').exec(function (err, competitors) {
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
    Current_Edition.find({subdivision:'VI'}).sort('order').exec(function (err, competitors) {
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
    Current_Edition.find({subdivision:'VII'}).sort('order').exec(function (err, competitors) {
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
    Current_Edition.find({subdivision:'VIII'}).sort('order').exec(function (err, competitors) {
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
    Current_Edition.find({subdivision:'IX'}).sort('order').exec(function (err, competitors) {
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
    Current_Edition.find({subdivision:'X'}).sort('order').exec(function (err, competitors) {
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
    Current_Edition.find({subdivision:'XI'}).sort('order').exec(function (err, competitors) {
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
    Current_Edition.find({subdivision:'XII'}).sort('order').exec(function (err, competitors) {
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
router.get('/div3/I',ensureAuthenticated, function(req, res){
    Current_Edition.find({subdivision:'XIII'}).sort('order').exec(function (err, competitors) {
        if(err){
            console.log(err);
        } else {

            res.render('protocol', {
                title:'Rzut III zastęp I',
                competitors: competitors,

            });

        }
    });

});
router.get('/div3/II',ensureAuthenticated, function(req, res){
    Current_Edition.find({subdivision:'XIV'}).sort('order').exec(function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Rzut III zastęp II',
                competitors: competitors,

            });

        }
    });

});

router.get('/div3/III',ensureAuthenticated, function(req, res){
    Current_Edition.find({subdivision:'XV'}).sort('order').exec(function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Rzut III zastęp III',
                competitors: competitors,

            });

        }
    });

});
router.get('/div3/IV',ensureAuthenticated, function(req, res){
    Current_Edition.find({subdivision:'XVI'}).sort('order').exec(function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Rzut III zastęp IV',
                competitors: competitors,

            });

        }
    });

});
router.get('/div3/V',ensureAuthenticated, function(req, res){
    Current_Edition.find({subdivision:'XVII'}).sort('order').exec(function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Rzut III zastęp V',
                competitors: competitors,

            });

        }
    });

});
router.get('/div3/VI',ensureAuthenticated, function(req, res){
    Current_Edition.find({subdivision:'XVIII'}).sort('order').exec(function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Rzut III zastęp VI',
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