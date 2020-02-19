var express = require('express');
var router = express.Router();
var Current_Edition=require('../models/I_Edition');
// var II_Edition=require('../models/II_Edition');
// var III_Edition=require('../models/III_Edition');
// var IV_Edition=require('../models/IV_Edition');

router.get('/',ensureAuthenticated, function(req, res) {
    res.render('class');
});
router.get('/mlodziezowa',ensureAuthenticated, function(req, res){

    res.render('judging');
});
router.get('/mlodziezowa/I',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'Młodzieżowa',subdivision:'I'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {

            res.render('protocol', {
                title:'Młodzieżowa I',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowa/II',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'Mlodziezowa',subdivision:'II'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {

            res.render('competitors', {
                title:'Młodzieżowa II',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowa/III',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'Mlodziezowa',subdivision:'III'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {

            res.render('competitors', {
                title:'Młodzieżowa III',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowa/IV',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'Mlodziezowa',subdivision:'IV'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {

            res.render('competitors', {
                title:'Młodzieżowa IV',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowa/V',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'Mlodziezowa',subdivision:'V'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {

            res.render('competitors', {
                title:'Młodzieżowa V',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowa/VI',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'Mlodziezowa',subdivision:'VI'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {

            res.render('competitors', {
                title:'Młodzieżowa VI',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowa/VII',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'Mlodziezowa',subdivision:'VII'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Młodzieżowa VII',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowa/VIII',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'Mlodziezowa',subdivision:'VIII'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Młodzieżowa VIII',
                competitors: competitors,

            });

        }
    });

});

router.get('/III/I',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'III',subdivision:'I'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa III I',
                competitors: competitors,

            });

        }
    });

});
router.get('/III/II',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'III',subdivision:'II'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa III II',
                competitors: competitors,

            });

        }
    });

});
router.get('/III/III',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'III',subdivision:'III'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa III III',
                competitors: competitors,

            });

        }
    });

});
router.get('/III/IV',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'III',subdivision:'IV'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'klasa III IV',
                competitors: competitors,

            });

        }
    });

});
router.get('/III/V',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'III',subdivision:'V'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa III V',
                competitors: competitors,

            });

        }
    });

});
router.get('/III/VI',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'III',subdivision:'VI'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa III VI',
                competitors: competitors,

            });

        }
    });

});
router.get('/III/VII',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'III',subdivision:'VII'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa III VII',
                competitors: competitors,

            });

        }
    });

});
router.get('/III/VIII',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'III',subdivision:'VIII'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa III VIII',
                competitors: competitors,

            });

        }
    });

});

router.get('/III',ensureAuthenticated, function(req, res){
    res.render('judging');
});

router.get('/II/I',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'II',subdivision:'I'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa II I',
                competitors: competitors,

            });

        }
    });

});
router.get('/II/II',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'II',subdivision:'II'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa II II',
                competitors: competitors,

            });

        }
    });

});
router.get('/II/III',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'II',subdivision:'III'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa II III',
                competitors: competitors,

            });

        }
    });

});
router.get('/II/IV',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'II',subdivision:'IV'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa II IV',
                competitors: competitors,

            });

        }
    });

});
router.get('/II/V',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'II',subdivision:'V'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa II V',
                competitors: competitors,

            });

        }
    });

});
router.get('/II/VI',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'II',subdivision:'VI'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa II VI',
                competitors: competitors,

            });

        }
    });

});
router.get('/II/VII',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'II',subdivision:'VII'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa II VII',
                competitors: competitors,

            });

        }
    });

});
router.get('/II/VIII',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'II',subdivision:'VIII'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa II VIII',
                competitors: competitors,

            });

        }
    });

});
router.get('/II',ensureAuthenticated, function(req, res){
    res.render('judging');
});
router.get('/I/I',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'I',subdivision:'I'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa I I',
                competitors: competitors,

            });

        }
    });

});
router.get('/I/II',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'I',subdivision:'II'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa I II',
                competitors: competitors,

            });

        }
    });

});
router.get('/I/III',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'I',subdivision:'III'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa I III',
                competitors: competitors,

            });

        }
    });

});
router.get('/I/IV',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'I',subdivision:'IV'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa I IV',
                competitors: competitors,

            });

        }
    });

});
router.get('/I/V',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'I',subdivision:'V'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa I V',
                competitors: competitors,

            });

        }
    });

});
router.get('/I/VI',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'I',subdivision:'VI'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa I VI',
                competitors: competitors,

            });

        }
    });

});
router.get('/I/VII',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'I',subdivision:'VII'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa I VII',
                competitors: competitors,

            });

        }
    });

});
router.get('/I/VIII',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'I',subdivision:'VIII'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Klasa I VIII',
                competitors: competitors,

            });

        }
    });

});
router.get('/I',ensureAuthenticated, function(req, res){
    res.render('judging');
});
router.get('/mlodziezowiec/I',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'mlodziezowiec',subdivision:'I'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Młodieżowiec I',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowiec/II',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'mlodziezowiec',subdivision:'II'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Młodieżowiec II',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowiec/III',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'mlodziezowiec',subdivision:'III'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Młodieżowiec III',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowiec/IV',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'mlodziezowiec',subdivision:'IV'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Młodieżowiec IV',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowiec/V',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'mlodziezowiec',subdivision:'V'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Młodieżowiec V',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowiec/VI',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'mlodziezowiec',subdivision:'VI'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Młodieżowiec VI',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowiec/VII',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'mlodziezowiec',subdivision:'VII'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Młodieżowiec VII',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowiec/VIII',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'mlodziezowiec',subdivision:'VIII'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Młodieżowiec VIII',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowiec',ensureAuthenticated, function(req, res){
    res.render('judging');
});
router.get('/mistrzowska/I',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'mistrzowska',subdivision:'I'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Mistrzowska I',
                competitors: competitors,

            });

        }
    });

});
router.get('/mistrzowska/II',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'mistrzowska',subdivision:'II'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Mistrzowska II',
                competitors: competitors,

            });

        }
    });

});
router.get('/mistrzowska/III',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'mistrzowska',subdivision:'III'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Mistrzowska III',
                competitors: competitors,

            });

        }
    });

});
router.get('/mistrzowska/IV',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'mistrzowska',subdivision:'IV'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Mistrzowska IV',
                competitors: competitors,

            });

        }
    });

});
router.get('/mistrzowska/V',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'mistrzowska',subdivision:'V'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Mistrzowska V',
                competitors: competitors,

            });

        }
    });

});
router.get('/mistrzowska/VI',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'mistrzowska',subdivision:'VI'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Mistrzowska VI',
                competitors: competitors,

            });

        }
    });

});
router.get('/mistrzowska/VII',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'mistrzowska',subdivision:'VII'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Mistrzowska VII',
                competitors: competitors,

            });

        }
    });

});
router.get('/mistrzowska/VIII',ensureAuthenticated, function(req, res){
    Current_Edition.find({class:'mistrzowska',subdivision:'VIII'},function (err,competitors) {
        if(err){
            console.log(err);
        } else {
            competitors.sort(compare);
            res.render('competitors', {
                title:'Mistrzowska VIII',
                competitors: competitors,

            });

        }
    });

});
router.get('/mistrzowska',ensureAuthenticated, function(req, res){
    res.render('judging');
});


function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        //req.flash('error_msg','You are not logged in');
        res.redirect('/users/login');
    }
}

module.exports = router;