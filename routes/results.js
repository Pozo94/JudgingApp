var express = require('express');
var router = express.Router();
var Competitor =require('../models/competitor');
var Current_Edition = require('../models/I_Edition');
var I_Edition = require('../models/I_Edition');
var II_Edition = require('../models/I_Edition');
var III_Edition = require('../models/I_Edition');
var IV_Edition = require('../models/I_Edition');
var League=require('../models/league')
var method={suma:-1};

router.get('/', function (req, res) {
    res.render('results');

});
router.get('/league/I',function (req,res) {


})
router.get('/league/II',function (req,res) {


})
router.get('/league/III',function (req,res) {


})
router.get('/league/mlodziezowa',function (req,res) {


})
router.get('/league/sum',function (req,res) {

    Current_Edition.db.collection('i_editions').find({clas:'Młodzieżowa'}).sort(method).toArray( function(err, competitors){
        for(i=0;i<15;i++){
            if (i===0) competitors[i].score=competitors[i].score+75;
            if (i===1) competitors[i].score=competitors[i].score+60;
            if (i===2) competitors[i].score=competitors[i].score+45;
            if (i===3) competitors[i].score=competitors[i].score+35;
            if (i===4) competitors[i].score=competitors[i].score+30;
            if (i===5) competitors[i].score=competitors[i].score+25;
            if (i===6) competitors[i].score=competitors[i].score+20;
            if (i===7) competitors[i].score=competitors[i].score+15;
            if (i===8) competitors[i].score=competitors[i].score+12;
            if (i===9) competitors[i].score=competitors[i].score+10;
            if (i===10) competitors[i].score=competitors[i].score+9;
            if (i===11) competitors[i].score=competitors[i].score+8;
            if (i===12) competitors[i].score=competitors[i].score+7;
            if (i===13) competitors[i].score=competitors[i].score+6;
            if (i===14) competitors[i].score=competitors[i].score+5;
            League.update({competitor:competitors[i].competitor},competitors[i],function (err) {
                if (err){
                    console.log(err)
                    return
                }

            })

        }
    })
    Current_Edition.db.collection('i_editions').find({clas:'III'}).sort(method).toArray( function(err, competitors){
        for(i=0;i<15;i++){
            if (i===0) competitors[i].score=competitors[i].score+130;
            if (i===1) competitors[i].score=competitors[i].score+115;
            if (i===2) competitors[i].score=competitors[i].score+100;
            if (i===3) competitors[i].score=competitors[i].score+85;
            if (i===4) competitors[i].score=competitors[i].score+75;
            if (i===5) competitors[i].score=competitors[i].score+65;
            if (i===6) competitors[i].score=competitors[i].score+55;
            if (i===7) competitors[i].score=competitors[i].score+45;
            if (i===8) competitors[i].score=competitors[i].score+35;
            if (i===9) competitors[i].score=competitors[i].score+25;
            if (i===10) competitors[i].score=competitors[i].score+20;
            if (i===11) competitors[i].score=competitors[i].score+15;
            if (i===12) competitors[i].score=competitors[i].score+12;
            if (i===13) competitors[i].score=competitors[i].score+10;
            if (i===14) competitors[i].score=competitors[i].score+8;
            League.update({competitor:competitors[i].competitor},competitors[i],function (err) {
                if (err){
                    console.log(err)
                    return
                }

            })

        }
    })
    Current_Edition.db.collection('i_editions').find({clas:'II'}).sort(method).toArray( function(err, competitors){
        for(i=0;i<15;i++){
            if (i===0) competitors[i].score=competitors[i].score+200;
            if (i===1) competitors[i].score=competitors[i].score+180;
            if (i===2) competitors[i].score=competitors[i].score+160;
            if (i===3) competitors[i].score=competitors[i].score+145;
            if (i===4) competitors[i].score=competitors[i].score+130;
            if (i===5) competitors[i].score=competitors[i].score+115;
            if (i===6) competitors[i].score=competitors[i].score+100;
            if (i===7) competitors[i].score=competitors[i].score+80;
            if (i===8) competitors[i].score=competitors[i].score+70;
            if (i===9) competitors[i].score=competitors[i].score+60;
            if (i===10) competitors[i].score=competitors[i].score+55;
            if (i===11) competitors[i].score=competitors[i].score+50;
            if (i===12) competitors[i].score=competitors[i].score+40;
            if (i===13) competitors[i].score=competitors[i].score+35;
            if (i===14) competitors[i].score=competitors[i].score+30;
            League.update({competitor:competitors[i].competitor},competitors[i],function (err) {
                if (err){
                    console.log(err)
                    return
                }

            })

        }
    })
    Current_Edition.db.collection('i_editions').find({clas:'I'}).sort(method).toArray( function(err, competitors){
        for(i=0;i<15;i++){
            if (i===0) competitors[i].score=competitors[i].score+300;
            if (i===1) competitors[i].score=competitors[i].score+250;
            if (i===2) competitors[i].score=competitors[i].score+200;
            if (i===3) competitors[i].score=competitors[i].score+175;
            if (i===4) competitors[i].score=competitors[i].score+150;
            if (i===5) competitors[i].score=competitors[i].score+130;
            if (i===6) competitors[i].score=competitors[i].score+110;
            if (i===7) competitors[i].score=competitors[i].score+90;
            if (i===8) competitors[i].score=competitors[i].score+80;
            if (i===9) competitors[i].score=competitors[i].score+75;
            if (i===10) competitors[i].score=competitors[i].score+70;
            if (i===11) competitors[i].score=competitors[i].score+65;
            if (i===12) competitors[i].score=competitors[i].score+60;
            if (i===13) competitors[i].score=competitors[i].score+55;
            if (i===14) competitors[i].score=competitors[i].score+50;
            League.update({competitor:competitors[i].competitor},competitors[i],function (err) {
                if (err){
                    console.log(err)
                    return
                }

            })

        }
    })
    res.redirect("/")

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

            res.render('Klasy/mlodziezowa', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});








module.exports = router;