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


});
router.get('/league/II',function (req,res) {


});
router.get('/league/III',function (req,res) {


});
router.get('/league/mlodziezowa',function (req,res) {


});
router.get('/league/sum',function (req,res) {

    Current_Edition.db.collection('i_editions').find({clas:'Młodzieżowa'}).sort(method).toArray( function(err, competitors){

        for(let i=0;i<Object.keys(competitors).length;i++)
        {   console.log(i)
            console.log(competitors[i])
            League.findOne({competitor:competitors[i].competitor},function (err,league) {
                //console.log(i)
                if (i===0){league.score=league.score+75;}
                if (i===1){league.score=league.score+60;}
                if (i===2){league.score=league.score+45;}
                if (i===3){league.score=league.score+35;}
                if (i===4){league.score=league.score+30;}
                if (i===5){league.score=league.score+25;}
                if (i===6){league.score=league.score+20;}
                if (i===7){league.score=league.score+15;}
                if (i===8){league.score=league.score+12;}
                if (i===9){league.score=league.score+10;}
                if (i===10){league.score=league.score+9;}
                if (i===11){league.score=league.score+8;}
                if (i===12){league.score=league.score+7;}
                if (i===13){league.score=league.score+6;}
                if (i===14){league.score=league.score+5;}

                League.update({competitor:league.competitor},league,function (err) {
                    if (err){
                        console.log(err)
                        return
                    }
                    else{
                        console.log()
                    }

                })

            })


        }
    });
    Current_Edition.db.collection('i_editions').find({clas:'III'}).sort(method).toArray( function(err, competitors){
        for(let i=0;i<Object.keys(competitors).length;i++)
        {   console.log(i)
            console.log(competitors[i])
            League.findOne({competitor:competitors[i].competitor},function (err,league) {
                //console.log(i)
                if (i===0){league.score=league.score+130;}
                if (i===1){league.score=league.score+115;}
                if (i===2){league.score=league.score+100;}
                if (i===3){league.score=league.score+85;}
                if (i===4){league.score=league.score+75;}
                if (i===5){league.score=league.score+65;}
                if (i===6){league.score=league.score+55;}
                if (i===7){league.score=league.score+45;}
                if (i===8){league.score=league.score+35;}
                if (i===9){league.score=league.score+25;}
                if (i===10){league.score=league.score+20;}
                if (i===11){league.score=league.score+15;}
                if (i===12){league.score=league.score+12;}
                if (i===13){league.score=league.score+10;}
                if (i===14){league.score=league.score+8;}

                League.update({competitor:league.competitor},league,function (err) {
                    if (err){
                        console.log(err)
                        return
                    }
                    else{
                        console.log()
                    }

                })

            })


        }
    })
    Current_Edition.db.collection('i_editions').find({clas:'II'}).sort(method).toArray( function(err, competitors){
        for(let i=0;i<Object.keys(competitors).length;i++)
        {
            League.findOne({competitor:competitors[i].competitor},function (err,league) {
                //console.log(i)
                if (i===0){league.score=league.score+200;}
                if (i===1){league.score=league.score+180;}
                if (i===2){league.score=league.score+160;}
                if (i===3){league.score=league.score+145;}
                if (i===4){league.score=league.score+130;}
                if (i===5){league.score=league.score+115;}
                if (i===6){league.score=league.score+100;}
                if (i===7){league.score=league.score+80;}
                if (i===8){league.score=league.score+70;}
                if (i===9){league.score=league.score+60;}
                if (i===10){league.score=league.score+55;}
                if (i===11){league.score=league.score+50;}
                if (i===12){league.score=league.score+40;}
                if (i===13){league.score=league.score+35;}
                if (i===14){league.score=league.score+30;}

                League.update({competitor:league.competitor},league,function (err) {
                    if (err){
                        console.log(err)
                        return
                    }
                    else{
                        console.log()
                    }

                })

            })


        }
    });
    Current_Edition.db.collection('i_editions').find({clas:'I'}).sort(method).toArray( function(err, competitors){
        for(let i=0;i<Object.keys(competitors).length;i++)
        {   console.log(i)
            console.log(competitors[i])
            League.findOne({competitor:competitors[i].competitor},function (err,league) {
                //console.log(i)
                if (i===0){league.score=league.score+300;}
                if (i===1){league.score=league.score+250;}
                if (i===2){league.score=league.score+200;}
                if (i===3){league.score=league.score+175;}
                if (i===4){league.score=league.score+150;}
                if (i===5){league.score=league.score+130;}
                if (i===6){league.score=league.score+110;}
                if (i===7){league.score=league.score+90;}
                if (i===8){league.score=league.score+80;}
                if (i===9){league.score=league.score+75;}
                if (i===10){league.score=league.score+70;}
                if (i===11){league.score=league.score+65;}
                if (i===12){league.score=league.score+60;}
                if (i===13){league.score=league.score+55;}
                if (i===14){league.score=league.score+50;}

                League.update({competitor:league.competitor},league,function (err) {
                    if (err){
                        console.log(err)
                        return
                    }
                    else{
                        console.log()
                    }

                })

            })


        }
    })
    res.redirect("/")

});

router.get('/mistrzowska', function (req, res) {

    Current_Edition.db.collection('i_editions').find({clas:"Mistrzowska"}).sort(method).toArray( function (err,competitors) {



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