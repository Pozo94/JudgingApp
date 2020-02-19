var express = require('express');
var router = express.Router();
var Competitor =require('../models/competitor');
var Current_Edition = require('../models/I_Edition');
var I_Edition = require('../models/I_Edition');
var II_Edition = require('../models/II_Edition');
var III_Edition = require('../models/III_Edition');
var IV_Edition = require('../models/IV_Edition');
function Round(n, k)
{
    var factor = Math.pow(10, k+1);
    n = Math.round(Math.round(n*factor)/10);
    return n/(factor/10);
}

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


/* GET home page. */
router.get('/',ensureAuthenticated, function (req, res) {
    res.render('judging');

});
router.get('/:subdivision/:id',ensureAuthenticated, function(req, res){
        Current_Edition.findById(req.params.id, function(err,competitor) {
            if (req.user.apparatus === 'VT') {
                if (competitor.VT1.Final>=0 && competitor.VT2.Final>=0) {
                    req.flash('danger', 'Competitor alredy judged!');
                    res.redirect('/judging/');
                }
                else
                    res.render('judge',{competitor:competitor});
            }
            if(req.user.apparatus==='FX')
                if(competitor.FX.Final>=0) {
                    req.flash('danger', 'Competitor alredy judged!');
                    res.redirect('/judging/');
                }
                else
                    res.render('judge',{competitor:competitor});
            if(req.user.apparatus==='PH')
                if(competitor.PH.Final>=0) {
                    req.flash('danger', 'Competitor alredy judged!');
                    res.redirect('/judging/');
                }
                else
                    res.render('judge',{competitor:competitor});
            if(req.user.apparatus==='SR')
                if(competitor.SR.Final>=0) {
                    req.flash('danger', 'Competitor alredy judged!');
                    res.redirect('/judging/');
                }
                else
                    res.render('judge',{competitor:competitor});
            if(req.user.apparatus==='PB')
                if(competitor.PB.Final>=0) {
                    req.flash('danger', 'Competitor alredy judged!');
                    res.redirect('/judging/');
                }
                else
                    res.render('judge',{competitor:competitor});
            if(req.user.apparatus==='HB')
                if(competitor.HB.Final>=0) {
                    req.flash('danger', 'Competitor alredy judged!');
                    res.redirect('/judging/');
                }
                else
                    res.render('judge',{competitor:competitor});

        });
});
router.post('/:subdivision/:id', function(req, res){
    function compareNumbers(a, b) {
        return a - b
    }

    var D=req.body.D;
    var E1=req.body.E1;
    var E2=req.body.E2;
    var E3=req.body.E3;
    var E4=req.body.E4;
    Sr=new Array(E1,E2,E3,E4);
    Sr.sort(compareNumbers);
    var E;
    E= (+Sr[1]+ +Sr[2])/2;
    //E = +((+Sr[0] + +Sr[1])/2);
    /*if(E2===undefined && E3===undefined && E4===undefined ){
        E= +E1;

    }
    if(E3===undefined && E4===undefined)
    {
        E= ((+E1 + +E2)/2);
    }
    if(E1 && E2 &&E3 && E4 )
    {
        E= (+Sr[1]+ +Sr[2])/2;
    }*/

    var Final=(+E + +D)
    //Final=Round( +Final,3);

    var competitor={};
    if (req.user.apparatus==='VT') {

        Current_Edition.findById(req.params.id, function (err, competitorr) {

            if (err) {
                console.log(err);
                return;
            } else {
                if(competitorr.VT1.Final>=0)
                {
                    competitorr.VT2.D=D;
                    competitorr.VT2.E1=E1;
                    competitorr.VT2.E2=E2;
                    competitorr.VT2.E3=E3;
                    competitorr.VT2.E4=E4;
                    competitorr.VT2.E=E;
                    competitorr.VT2.Final= +Final;
                    competitorr.VT = (+competitorr.VT1.Final + +Final)/2;
                    Competitor.createCompetitor(competitorr, function () {

                    });
                }
                else
                {
                    competitorr.VT1.D=D;
                    competitorr.VT1.E1=E1;
                    competitorr.VT1.E2=E2;
                    competitorr.VT1.E3=E3;
                    competitorr.VT1.E4=E4;
                    competitorr.VT1.E=E;
                    competitorr.VT1.Final= +Final;
                    competitorr.suma = +competitorr.suma+ +Final;
                    console.log(competitorr);
                    Competitor.createCompetitor(competitorr, function () {

                    });
                }


                //req.flash('success', 'Competitor Updated');
                //res.redirect('/');
            }

        });
    }
    if (req.user.apparatus==='FX')
    {
        competitor.FX= +Final;
        Current_Edition.findById(req.params.id, function(err,competitorr) {
            if(err){
                console.log(err);
                return;
            } else {
                competitorr.FX.D=D;
                competitorr.FX.E1=E1;
                competitorr.FX.E2=E2;
                competitorr.FX.E3=E3;
                competitorr.FX.E4=E4;
                competitorr.FX.E=E;
                competitorr.FX.Final= +Final;
                competitorr.suma= +competitorr.suma+ +Final;
                Competitor.createCompetitor(competitorr,function () {

                });
                req.flash('success', 'Competitor Updated');
                //res.redirect('/');
            }

        });
    }
    if (req.user.apparatus==='PH')
    {
        competitor.PH= +Final;
        Current_Edition.findById(req.params.id, function(err,competitorr) {
            if(err){
                console.log(err);
                return;
            } else {
                competitorr.PH.D=D;
                competitorr.PH.E1=E1;
                competitorr.PH.E2=E2;
                competitorr.PH.E3=E3;
                competitorr.PH.E4=E4;
                competitorr.PH.E=E;
                competitorr.PH.Final= +Final;
                competitorr.suma= +competitorr.suma+ +Final;
                Competitor.createCompetitor(competitorr,function () {

                });
                req.flash('success', 'Competitor Updated');
                //res.redirect('/');
            }

        });
    }
    if (req.user.apparatus==='SR')
    {
        competitor.SR= +Final;
        Current_Edition.findById(req.params.id, function(err,competitorr) {
            if(err){
                console.log(err);
                return;
            } else {
                competitorr.SR.D=D;
                competitorr.SR.E1=E1;
                competitorr.SR.E2=E2;
                competitorr.SR.E3=E3;
                competitorr.SR.E4=E4;
                competitorr.SR.E=E;
                competitorr.SR.Final= +Final;
                competitorr.suma= +competitorr.suma+ +Final;
                Competitor.createCompetitor(competitorr,function () {

                });
                req.flash('success', 'Competitor Updated');

                //res.redirect('/');
            }

        });
    }
    if (req.user.apparatus==='PB')
    {
        competitor.PB= +Final;
        Current_Edition.findById(req.params.id, function(err,competitorr) {
            if(err){
                console.log(err);
                return;
            } else {
                competitorr.PB.D=D;
                competitorr.PB.E1=E1;
                competitorr.PB.E2=E2;
                competitorr.PB.E3=E3;
                competitorr.PB.E4=E4;
                competitorr.PB.E=E;
                competitorr.PB.Final= +Final;
                competitorr.suma= +competitorr.suma+ +Final;
                Competitor.createCompetitor(competitorr,function () {

                });
                req.flash('success', 'Competitor Updated');
                //res.redirect('/');
            }

        });
    }
    if (req.user.apparatus==='HB')
    {
        competitor.HB= +Final;
        Current_Edition.findById(req.params.id, function(err,competitorr) {
            if(err){
                console.log(err);
                return;
            } else {
                competitorr.HB.D=D;
                competitorr.HB.E1=E1;
                competitorr.HB.E2=E2;
                competitorr.HB.E3=E3;
                competitorr.HB.E4=E4;
                competitorr.HB.E=E;
                competitorr.HB.Final= +Final;
                competitorr.suma= +competitorr.suma+ +Final;
                Competitor.createCompetitor(competitorr,function () {

                });
                req.flash('success', 'Competitor Updated');
                //res.redirect('/');
            }

        });
    }
    res.redirect('/judging/');
});
router.get('/I',ensureAuthenticated, function (req, res) {
    Current_Edition.find({}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            //competitors.sort(compare);
            res.render('Zastepy/I', {
                title:'Zastęp I',
                competitors: competitors
            });

        }
    });

});
router.get('/II',ensureAuthenticated, function (req, res) {
    Current_Edition.find({}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Zastepy/II', {
                title:'Zastęp II',
                competitors: competitors
            });
        }
    });

});
router.get('/III',ensureAuthenticated, function (req, res) {
    Current_Edition.find({}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Zastepy/III', {
                title:'Zastęp III',
                competitors: competitors
            });
        }
    });

});
router.get('/IV',ensureAuthenticated, function (req, res) {
    Current_Edition.find({}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Zastepy/IV', {
                title:'Zastęp IV',
                competitors: competitors
            });
        }
    });

});

router.get('/V',ensureAuthenticated, function (req, res) {
    Current_Edition.find({}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Zastepy/V', {
                title:'Zastęp V',
                competitors: competitors
            });
        }
    });

});
router.get('/VI',ensureAuthenticated, function (req, res) {
    Current_Edition.find({}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Zastepy/VI', {
                title:'Zastęp VI',
                competitors: competitors
            });
        }
    });

});
router.get('/VII',ensureAuthenticated, function (req, res) {
    Current_Edition.find({}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Zastepy/VII', {
                title:'Zastęp VII',
                competitors: competitors
            });
        }
    });

});
router.get('/VIII',ensureAuthenticated, function (req, res) {
    Current_Edition.find({}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Zastepy/VIII', {
                title:'Zastęp VIII',
                competitors: competitors
            });
        }
    });

});

function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated() &&  req.user.role!=='Admin'){
        return next();
    } else {
        req.flash('danger', 'Please log in as Judge');
        res.redirect('/');
    }
}


module.exports = router;