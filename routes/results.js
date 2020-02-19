var express = require('express');
var router = express.Router();
var Competitor =require('../models/competitor');
var Current_Edition = require('../models/I_Edition');
var method={suma:-1};
router.get('/', function (req, res) {
    res.render('results');

});

router.get('/mistrzowska', function (req, res) {

    Current_Edition.db.collection('i_editions').find().sort(method).toArray( function (err,competitors) {



        if(err){
            console.log(err);
        } else {

            res.render('Klasy/mistrzowska', {
                title:'Klasa mistrzowska',
                competitors: competitors
            });
        }
    });

});

router.get('/mlodziezowiec', function (req, res) {
    Current_Edition.db.collection('i_editions').find().sort(method).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Klasy/mlodziezowiec', {
                title:'Klasa mlodziezowiec',
                competitors: competitors
            });
        }
    });

});

router.get('/I', function (req, res) {
    Current_Edition.db.collection('i_editions').find().sort(method).toArray(function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Klasy/I', {
                title:'Klasa I',
                competitors: competitors
            });
        }
    });

});

router.get('/II', function (req, res) {
    Current_Edition.db.collection('i_editions').find().sort(method).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Klasy/II', {
                title:'Klasa II',
                competitors: competitors
            });
        }
    });

});

router.get('/III', function (req, res) {
    Current_Edition.db.collection('i_editions').find().sort(method).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Klasy/III', {
                title:'Klasa III',
                competitors: competitors
            });
        }
    });

});
router.get('/mlodziezowa', function (req, res) {
    Current_Edition.db.collection('i_editions').find().sort(method).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            console.log(competitors);
            res.render('Klasy/mlodziezowa', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});








module.exports = router;