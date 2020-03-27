var express = require('express');
var router = express.Router();
var Competitor =require('../models/competitor');
var League= require('../models/league');
var Current_Edition=require('../models/I_Edition')
var I_Edition=require('../models/I_Edition');
var II_Edition=require('../models/II_Edition');
var III_Edition=require('../models/III_Edition');
var IV_Edition=require('../models/IV_Edition');

/* GET competitors listing. */

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const clasA = a.clas.toUpperCase();
    const clasB = b.clas.toUpperCase();

    let comparison = 0;
    if (clasA > clasB) {
        comparison = 1;
    } else if (clasA < clasB) {
        comparison = -1;
    }
    return comparison;
}
function compare1(a, b) {
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
router.get('/mistrzowska', function(req, res){

    Competitor.find({clas:"Mistrzowska"}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Competitors',
                competitors: competitors,

            });

        }
    });
});
router.get('/mlodziezowiec', function(req, res){

    Competitor.find({clas:'Młodzieżowiec'}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Competitors',
                competitors: competitors,

            });

        }
    });
});
router.get('/I', function(req, res){

    Competitor.find({clas:'I'}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Competitors',
                competitors: competitors,

            });

        }
    });
});
router.get('/II', function(req, res){

    Competitor.find({clas:'II'}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Competitors',
                competitors: competitors,

            });

        }
    });
});
router.get('/III', function(req, res){

    Competitor.find({clas:'III'}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Competitors',
                competitors: competitors,

            });

        }
    });
});
router.get('/mlodziezowa', function(req, res){

    Competitor.find({clas:'Młodzieżowa'}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Competitors',
                competitors: competitors,

            });

        }
    });
});
router.get('/', function(req, res){


            res.render('class');


});

/* Add competitor */
router.get('/addCompetitor',ensureAdmin,function (req,res) {
    res.render('addCompetitor');

})
router.get('/addParticipant',ensureAdmin,function (req,res) {
    Competitor.find({}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare1);
            res.render('addParticipant', {
                title:'AddParticipant',
                competitors: competitors,

            });

        }
    });

});
router.post('/addParticipant', function (req, res) {
    var name = req.body.name;
    var array =name.split(' ');
    var competition=req.body.competition;

    var firstname = array[0];
    var lastname = array[1];

    var Participant;
    Competitor.getUserByName(firstname,lastname,function (err,competitor) {
        var query={firstname:firstname,lastname:lastname};
        competitor.status=true;
        console.log(competitor);
        Competitor.update(query,competitor,function(err){
            if(err){
                console.log(err);
                return
            }


        });
        if (competition==='I_Edition'){

            I_Edition.findOne({competitor:competitor.id}).then(participant=>{
                if(participant)
                {
                    req.flash('danger', 'The athlete is already participating in this competition!');


                }
                else
                {
                    Participant= new I_Edition({
                        competitor:competitor.id,
                        subdivision:req.body.subdivision,
                        firstname:firstname,
                        lastname:lastname,
                        clas:competitor.clas,
                        club:competitor.club,
                        year:competitor.year
                    })
                    I_Edition.addParticipant(Participant,function(err, participant){
                        if(err) throw err
                        console.log(participant);
                    })
                }

            })

            League.findOne({competitor:competitor.id}).then(participant=>{
                if(!participant)
                {
                    Participant= new League({
                        competitor:competitor.id,
                        firstname:firstname,
                        lastname:lastname,
                        clas:competitor.clas,
                        year:competitor.year,
                        club:competitor.club

                    })
                    League.addParticipant(Participant,function(err, participant){
                        if(err) throw err
                        console.log(participant);

                    })
                }
                res.redirect('addParticipant');
            });

        }
        if (competition==='II_Edition'){
            II_Edition.findOne({competitor:competitor.id}).then(participant=>{
                if(participant)
                {
                    req.flash('danger', 'The athlete is already participating in this competition!');


                }
                else
                {
                    Participant= new II_Edition({
                        competitor:competitor.id,
                        subdivision:req.body.subdivision,
                        firstname:firstname,
                        lastname:lastname,
                        clas:competitor.clas,
                        year:competitor.year,
                        club:competitor.club


                    })
                    II_Edition.addParticipant(Participant,function(err, participant){
                        if(err) throw err
                        console.log(participant);
                    })
                }

            })

            League.findOne({competitor:competitor.id}).then(participant=>{
                if(!participant)
                {
                    Participant= new League({
                        competitor:competitor.id,
                        firstname:firstname,
                        lastname:lastname,
                        clas:competitor.clas,
                        year:competitor.year,
                        club:competitor.club

                    })
                    League.addParticipant(Participant,function(err, participant){
                        if(err) throw err
                        console.log(participant);

                    })
                }
                res.redirect('addParticipant');
            });
        }
        if (competition==='III_Edition'){
            III_Edition.findOne({competitor:competitor.id}).then(participant=>{
                if(participant)
                {
                    req.flash('danger', 'The athlete is already participating in this competition!');


                }
                else
                {
                    Participant= new III_Edition({
                        competitor:competitor.id,
                        subdivision:req.body.subdivision,
                        firstname:firstname,
                        lastname:lastname,
                        clas:competitor.clas,
                        year:competitor.year,
                        club:competitor.club


                    })
                    III_Edition.addParticipant(Participant,function(err, participant){
                        if(err) throw err
                        console.log(participant);
                    })
                }

            })

            League.findOne({competitor:competitor.id,clas:competitor.clas}).then(participant=>{
                if(!participant)
                {
                    Participant= new League({
                        competitor:competitor.id,
                        firstname:firstname,
                        lastname:lastname,
                        clas:competitor.clas,
                        year:competitor.year,
                        club:competitor.club


                    })
                    League.addParticipant(Participant,function(err, participant){
                        if(err) throw err
                        console.log(participant);

                    })
                }
                res.redirect('addParticipant');
            });

        }
        if (competition==='IV_Edition'){
            IV_Edition.findOne({competitor:competitor.id}).then(participant=>{
                if(participant)
                {
                    req.flash('danger', 'The athlete is already participating in this competition!');


                }
                else
                {
                    Participant= new IV_Edition({
                        competitor:competitor.id,
                        subdivision:req.body.subdivision,
                        firstname:firstname,
                        lastname:lastname,
                        clas:competitor.clas,
                        year:competitor.year,
                        club:competitor.club


                    })
                    IV_Edition.addParticipant(Participant,function(err, participant){
                        if(err) throw err
                        console.log(participant);
                    })
                }

            })

            League.findOne({competitor:competitor.id}).then(participant=>{
                if(!participant)
                {
                    Participant= new League({
                        competitor:competitor.id,
                        firstname:firstname,
                        lastname:lastname,
                        clas:competitor.clas,
                        year:competitor.year,
                        club:competitor.club


                    })
                    League.addParticipant(Participant,function(err, participant){
                        if(err) throw err
                        console.log(participant);

                    })
                }

                res.redirect('addParticipant');
            });

        }

    })



});
//Edit form
router.get('/edit/:id',ensureAdmin,function (req,res) {
    Competitor.findById(req.params.id, function (err, competitor) {
        res.render('editCompetitor', {
            competitor: competitor
        });

    })
});


router.post('/addCompetitor', function(req, res) {
    var firstname = req.body.firstname1;
    var lastname = req.body.lastname1;
    var club = req.body.club1;
    var year = req.body.year1;
    var clas = req.body.clas1;
    var subdivision= req.body.subdivision1;
    var newCompetitor = new Competitor({
        firstname: firstname,
        lastname: lastname,
        year: year,
        clas: clas,
        club: club
    });
    Competitor.createCompetitor(newCompetitor, function () {


    });
    req.flash('success', 'Competitor added!');
    res.location('/');
    res.redirect('/competitors/addCompetitor');
});

router.post('/edit/:id', function(req, res) {
    var competitor={};
    competitor.firstname = req.body.firstname1;
    competitor.lastname = req.body.lastname1;
    competitor.club = req.body.club1;
    competitor.year = req.body.year1;
    competitor.clas = req.body.clas1;
    competitor.subdivision= req.body.subdivision;
    let query={_id:req.params.id};
    let query1={competitor:req.params.id};
    Competitor.update(query,competitor,function (err) {
        if(err){
            console.log(err);
            return
        }
        else{




        }
    })
    ;
    Current_Edition.update(query1,competitor,function (err) {
        if(err){
            console.log(err);
            return
        }
        else{
            req.flash('success', 'Competitor updated!');

            res.redirect('/competitors/');

        }
    })


});
router.get('/removeVT2/:id',function(req,res){
    I_Edition.findById(req.params.id,function (err,participant) {

            let query={_id:req.params.id};
            participant.VT2.Final=undefined;



            I_Edition.update(query,participant,function (err) {
                if(err){
                    console.log(err);
                    return
                }
                else{
                    req.flash('success', 'Competitor updated!');

                    res.redirect('/judging/'+participant.id);

                }
            })

    })
});

router.get('/remove/:id',function (req,res) {
    var app = req.user.apparatus;
    let query = {_id: req.params.id};

    Current_Edition.findById(req.params.id, function (err, participant) {

        if (app === 'VT') {
            participant.suma=+participant.suma - +participant.VT1.Final;
            participant.VT1.Final = undefined;
        }
        if (app === 'FX') {
            participant.suma=+participant.suma - +participant.FX.Final;
            participant.FX.Final = undefined;
        }
        if (app === 'PH') {
            participant.suma=+participant.suma - +participant.PH.Final;
            participant.PH.Final = undefined;
        }
        if (app === 'SR') {
            participant.suma=+participant.suma - +participant.SR.Final;
            participant.SR.Final = undefined
        }
        if (app === 'PB') {
            participant.suma=+participant.suma - +participant.PB.Final;
            participant.PB.Final = undefined;
        }
        if (app === 'HB') {
            participant.suma=+participant.suma - +participant.HB.Final;
            participant.HB.Final = undefined;
        }


        Current_Edition.update(query, participant, function (err) {
            if (err) {
                console.log(err);
                return
            }
            else {
                req.flash('success', 'Competitor updated!');

                res.redirect('/judging/' + participant.id);

            }
        })

    });
});

router.delete('/:id', function(req, res) {
    let query = {_id: req.params.id};
    Competitor.deleteOne(query,function (err) {
        if(err){
            console.log(err);
            return
        }
        else{
            req.flash('danger', 'Competitor deleted!');
            res.render('index');


        }
    })
    ;

});
function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        req.flash('danger', 'Please login');
        res.redirect('/users/login');
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
