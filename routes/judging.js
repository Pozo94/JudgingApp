var express = require('express');
var router = express.Router();
var Competitor =require('../models/competitor');
var I_Edition = require('../models/I_Edition');
var II_Edition = require('../models/II_Edition');
var III_Edition = require('../models/III_Edition');
var IV_Edition = require('../models/IV_Edition');
var Current_Edition = require('../models/I_Edition');

function Round(n, k)
{
    var factor = Math.pow(10, k+1);
    n = Math.round(Math.round(n*factor)/10);
    return n/(factor/10);
}
function ComputeSum(competitor){
    let FX,PH,SR,VT,PB,HB;
    if(competitor.FX.Final===undefined){
        FX=0;
    }else {
        FX= +competitor.FX.Final;
    }
    if(competitor.PH.Final===undefined){
        PH=0;
    }else {
        PH= +competitor.PH.Final;
    }
    if(competitor.SR.Final===undefined){
        SR=0;
    }else {
        SR= +competitor.SR.Final;
    }
    if(competitor.VT1.Final===undefined){
        VT=0;
    }else {
        VT= +competitor.VT1.Final;
    }
    if(competitor.PB.Final===undefined){
        PB=0;
    }else {
        PB= +competitor.PB.Final;
    }
    if(competitor.HB.Final===undefined){
        HB=0;
    }else {
        HB= +competitor.HB.Final;
    }
    return Round(FX+PH+SR+VT+PB+HB,3);

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

var method={clas:-1};
/* GET home page. */
router.get('/',ensureAuthenticated, function (req, res) {
    res.render('judging');

});

router.get('/:id',ensureAuthenticated, function(req, res){
        Current_Edition.findById(req.params.id, function(err,competitor) {
            if (req.user.apparatus === 'VT') {
                if (competitor.VT1.Final>=0 && competitor.VT2.Final>=0) {
                    req.flash('danger', 'Competitor alredy judged!');
                    res.redirect('/protocols/');
                }
                else
                    res.render('judge',{competitor:competitor});
            }
            if(req.user.apparatus==='FX')
                if(competitor.FX.Final>=0) {
                    req.flash('danger', 'Competitor alredy judged!');
                    res.redirect('/protocols/');
                }
                else
                    res.render('judge',{competitor:competitor});
            if(req.user.apparatus==='PH')
                if(competitor.PH.Final>=0) {
                    req.flash('danger', 'Competitor alredy judged!');
                    res.redirect('/protocols/');
                }
                else
                    res.render('judge',{competitor:competitor});
            if(req.user.apparatus==='SR')
                if(competitor.SR.Final>=0) {
                    req.flash('danger', 'Competitor alredy judged!');
                    res.redirect('/protocols/');
                }
                else
                    res.render('judge',{competitor:competitor});
            if(req.user.apparatus==='PB')
                if(competitor.PB.Final>=0) {
                    req.flash('danger', 'Competitor alredy judged!');
                    res.redirect('/protocols/');
                }
                else
                    res.render('judge',{competitor:competitor});
            if(req.user.apparatus==='HB')
                if(competitor.HB.Final>=0) {
                    req.flash('danger', 'Competitor alredy judged!');
                    res.redirect('/protocols/');
                }
                else
                    res.render('judge',{competitor:competitor});

        });
});
router.post('/:id',  async function(req, res){
    function compareNumbers(a, b) {
        return a - b
    }
    var sub;
    var D=req.body.D;
    var E1=req.body.E1;
    var E2=req.body.E2;
    var E3=req.body.E3;
    var E4=req.body.E4;
    var N=req.body.Neutral;
    Sr=new Array(E1,E2,E3,E4);
    Sr.sort(compareNumbers);
    var E;

    E= (+Sr[1]+ +Sr[2])/2;
    if (Sr[0]===''&&Sr[1]===''){

        E= (+Sr[2]+ +Sr[3])/2;
        E3=10;
        E4=10;
    }
    if (Sr[0]===''&& Sr[1]>0){
        E= +Sr[2];
        E4=10;

    }
    if(Sr[0]===''&& Sr[1]===''&&Sr[2]===''){
        E= +Sr[3];
        E2=10;
        E3=10;
        E4=10;

    }
    var Final=((10 - +E - +N) + +D)
    Final=Round( +Final,3);
    var competitor={};

    if(req.user.apparatus==='VT') {

        await Current_Edition.findById(req.params.id, async function (err, competitorr) {

            if (err) {
                console.log(err);
                return;
            } else {
                if(competitorr.VT1.Final>=0)
                {
                    competitorr.VT2.D=D;
                    competitorr.VT2.E1=10-E1;
                    competitorr.VT2.E2=10-E2;
                    competitorr.VT2.E3=10-E3;
                    competitorr.VT2.E4=10-E4;
                    competitorr.VT2.Neutral=N;
                    competitorr.VT2.E=10-E-N;
                    competitorr.VT2.Final= +Final;
                    console.log("To jest ok" +competitorr)
                    competitorr.VT.Final = +(+competitorr.VT1.Final + +competitorr.VT2.Final)/2;
                    sub=  competitorr.subdivision;

                    Competitor.createCompetitor(competitorr, function () {

                    });
                }
                else
                {
                    competitorr.VT1.D=D;
                    competitorr.VT1.E1=10-E1;
                    competitorr.VT1.E2=10-E2;
                    competitorr.VT1.E3=10-E3;
                    competitorr.VT1.E4=10-E4;
                    competitorr.VT1.Neutral=N;
                    competitorr.VT1.E=10-E-N;
                    competitorr.VT1.Final= +Final;
                    sub=  competitorr.subdivision;

                    competitorr.suma=ComputeSum(competitorr);

                    Competitor.createCompetitor(competitorr, function () {

                    });
                }


                req.flash('success', 'Competitor Updated');
                //res.redirect('/');
            }

        });
    }
    if (req.user.apparatus==='FX')
    {
        competitor.FX= +Final;
        await Current_Edition.findById(req.params.id, async function(err,competitorr) {
            if(err){
                console.log(err);
                return;
            } else {
                console.log(competitorr.FX.E3);
                competitorr.FX.D=D;
                competitorr.FX.E1=10-E1;
                competitorr.FX.E2=10-E2;
                competitorr.FX.E3=10-E3;
                competitorr.FX.E4=10-E4;
                competitorr.FX.Neutral=N;
                competitorr.FX.E=10-E-N;
                competitorr.FX.Final= +Final;
                competitorr.suma=ComputeSum(competitorr);
                sub=await competitorr.subdivision;
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
        await Current_Edition.findById(req.params.id, async function(err,competitorr) {
            if(err){
                console.log(err);
                return;
            } else {
                competitorr.PH.D=D;
                competitorr.PH.E1=10-E1;
                competitorr.PH.E2=10-E2;
                competitorr.PH.E3=10-E3;
                competitorr.PH.E4=10-E4;
                competitorr.PH.Neutral=N;
                competitorr.PH.E=10-E-N;
                competitorr.PH.Final= +Final;
                sub= await competitorr.subdivision;
                competitorr.suma=ComputeSum(competitorr);
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
        await Current_Edition.findById(req.params.id,  async function(err,competitorr) {
            if(err){
                console.log(err);
                return;
            } else {
                competitorr.SR.D=D;
                competitorr.SR.E1=10-E1;
                competitorr.SR.E2=10-E2;
                competitorr.SR.E3=10-E3;
                competitorr.SR.E4=10-E4;
                competitorr.SR.Neutral=N;
                competitorr.SR.E=10-E-N;
                competitorr.SR.Final= +Final;
                competitorr.suma=ComputeSum(competitorr);
                sub= await  competitorr.subdivision;
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
        await Current_Edition.findById(req.params.id, async function(err,competitorr) {
            if(err){
                console.log(err);
                return;
            } else {
                competitorr.PB.D=D;
                competitorr.PB.E1=10-E1;
                competitorr.PB.E2=10-E2;
                competitorr.PB.E3=10-E3;
                competitorr.PB.E4=10-E4;
                competitorr.PB.Neutral=N;
                competitorr.PB.E=10-E-N;
                competitorr.PB.Final= +Final;
                sub=await competitorr.subdivision;

                competitorr.suma=ComputeSum(competitorr);

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
        await Current_Edition.findById(req.params.id, async function(err,competitorr) {
            if(err){
                console.log(err);
                return;
            } else {
                competitorr.HB.D=D;
                competitorr.HB.E1=10-E1;
                competitorr.HB.E2=10-E2;
                competitorr.HB.E3=10-E3;
                competitorr.HB.E4=10-E4;
                competitorr.HB.Neutral=N;
                competitorr.HB.E=10-E-N;
                competitorr.HB.Final= +Final;
                sub=await competitorr.subdivision;

                competitorr.suma=ComputeSum(competitorr);

                Competitor.createCompetitor(competitorr,function () {

                });
                req.flash('success', 'Competitor Updated');
                //res.redirect('/');
            }

        });
    }
    if(sub==="I"){
        res.redirect('/protocols/div1/I');
    }
    else if(sub==="II"){
        res.redirect('/protocols/div1/II');
    }
    else if(sub==="III"){
        res.redirect('/protocols/div1/III');
    }
    else if(sub==="IV"){
        res.redirect('/protocols/div1/IV');
    }
    else if(sub==="V"){
        res.redirect('/protocols/div1/V');
    }
    else if(sub==="VI"){
        res.redirect('/protocols/div1/VI');
    }
    //res.redirect('back')
    else if(sub==='XIII')
        res.redirect('/protocols/div3/I');
    else if(sub==='XIV')
        res.redirect('/protocols/div3/II');
    else if (sub==='XV')
        res.redirect('/protocols/div3/III');
    else if(sub==='XVI')
        res.redirect('/protocols/div3/IV');
    else if(sub==='XVII')
        res.redirect('/protocols/div3/V');
    else if(sub==='XVIII')
        res.redirect('/protocols/div3/VI');
    else if(sub==='XIX')
        res.redirect('/protocols/div3/VII');
    else if(sub==='VII')
    res.redirect('/protocols/div2/I');
    else if(sub==='VIII')
        res.redirect('/protocols/div2/II');
    else if (sub==='IX')
        res.redirect('/protocols/div2/III');
    else if(sub==='X')
        res.redirect('/protocols/div2/IV');
    else if(sub==='XI')
        res.redirect('/protocols/div2/V');
    else if(sub==='XII')
        res.redirect('/protocols/div2/VI');


});
router.get('/I',ensureAuthenticated, function (req, res) {
    Current_Edition.find({subdivision:"I"}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('subdivisions', {
                title:'Zastęp I',
                competitors: competitors
            });

        }
    });

});
router.get('/II',ensureAuthenticated, function (req, res) {
    Current_Edition.find({subdivision:"II"}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('subdivisions', {
                title:'Zastęp II',
                competitors: competitors
            });
        }
    });

});
router.get('/III',ensureAuthenticated, function (req, res) {
    Current_Edition.find({subdivision:"III"}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('subdivisions', {
                title:'Zastęp III',
                competitors: competitors
            });
        }
    });

});
router.get('/IV',ensureAuthenticated, function (req, res) {
    Current_Edition.find({subdivision:"IV"}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('subdivisions', {
                title:'Zastęp IV',
                competitors: competitors
            });
        }
    });

});

router.get('/V',ensureAuthenticated, function (req, res) {
    Current_Edition.find({subdivision:"V"}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('subdivisions', {
                title:'Zastęp V',
                competitors: competitors
            });
        }
    });

});
router.get('/VI',ensureAuthenticated, function (req, res) {
    Current_Edition.find({subdivision:"VI"}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('subdivisions', {
                title:'Zastęp VI',
                competitors: competitors
            });
        }
    });

});
router.get('/VII',ensureAuthenticated, function (req, res) {
    Current_Edition.find({subdivision:"VII"}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('subdivisions', {
                title:'Zastęp VII',
                competitors: competitors
            });
        }
    });

});
router.get('/VIII',ensureAuthenticated, function (req, res) {
    Current_Edition.find({subdivision:"VIII"}, function(err, competitors){
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('subdivisions', {
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