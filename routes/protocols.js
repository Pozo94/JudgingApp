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
    Current_Edition.find({clas:'Młodzieżowa',subdivision:'I'},function (err, competitors) {
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
    Current_Edition.find({clas:'Młodzieżowa',subdivision:'II'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {

            res.render('protocol', {
                title:'Młodzieżowa II',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowa/III',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'Młodzieżowa',subdivision:'III'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {

            res.render('protocol', {
                title:'Młodzieżowa III',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowa/IV',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'Młodzieżowa',subdivision:'IV'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {

            res.render('protocol', {
                title:'Młodzieżowa IV',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowa/V',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'Młodzieżowa',subdivision:'V'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {

            res.render('protocol', {
                title:'Młodzieżowa V',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowa/VI',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'Młodzieżowa',subdivision:'VI'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {

            res.render('protocol', {
                title:'Młodzieżowa VI',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowa/VII',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'Młodzieżowa',subdivision:'VII'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {

            res.render('protocol', {
                title:'Młodzieżowa VII',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowa/VIII',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'Młodzieżowa',subdivision:'VIII'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Młodzieżowa VIII',
                competitors: competitors,

            });

        }
    });

});

router.get('/III/I',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'III',subdivision:'I'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Klasa III I',
                competitors: competitors,

            });

        }
    });

});
router.get('/III/II',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'III',subdivision:'II'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Klasa III II',
                competitors: competitors,

            });

        }
    });

});
router.get('/III/III',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'III',subdivision:'III'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Klasa III III',
                competitors: competitors,

            });

        }
    });

});
router.get('/III/IV',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'III',subdivision:'IV'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'klasa III IV',
                competitors: competitors,

            });

        }
    });

});
router.get('/III/V',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'III',subdivision:'V'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Klasa III V',
                competitors: competitors,

            });

        }
    });

});
router.get('/III/VI',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'III',subdivision:'VI'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Klasa III VI',
                competitors: competitors,

            });

        }
    });

});
router.get('/III/VII',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'III',subdivision:'VII'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Klasa III VII',
                competitors: competitors,

            });

        }
    });

});
router.get('/III/VIII',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'III',subdivision:'VIII'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
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
    Current_Edition.find({clas:'II',subdivision:'I'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Klasa II I',
                competitors: competitors,

            });

        }
    });

});
router.get('/II/II',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'II',subdivision:'II'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Klasa II II',
                competitors: competitors,

            });

        }
    });

});
router.get('/II/III',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'II',subdivision:'III'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Klasa II III',
                competitors: competitors,

            });

        }
    });

});
router.get('/II/IV',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'II',subdivision:'IV'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Klasa II IV',
                competitors: competitors,

            });

        }
    });

});
router.get('/II/V',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'II',subdivision:'V'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Klasa II V',
                competitors: competitors,

            });

        }
    });

});
router.get('/II/VI',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'II',subdivision:'VI'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Klasa II VI',
                competitors: competitors,

            });

        }
    });

});
router.get('/II/VII',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'II',subdivision:'VII'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Klasa II VII',
                competitors: competitors,

            });

        }
    });

});
router.get('/II/VIII',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'II',subdivision:'VIII'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
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
    Current_Edition.find({clas:'I',subdivision:'I'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Klasa I I',
                competitors: competitors,

            });

        }
    });

});
router.get('/I/II',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'I',subdivision:'II'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Klasa I II',
                competitors: competitors,

            });

        }
    });

});
router.get('/I/III',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'I',subdivision:'III'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Klasa I III',
                competitors: competitors,

            });

        }
    });

});
router.get('/I/IV',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'I',subdivision:'IV'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Klasa I IV',
                competitors: competitors,

            });

        }
    });

});
router.get('/I/V',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'I',subdivision:'V'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Klasa I V',
                competitors: competitors,

            });

        }
    });

});
router.get('/I/VI',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'I',subdivision:'VI'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Klasa I VI',
                competitors: competitors,

            });

        }
    });

});
router.get('/I/VII',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'I',subdivision:'VII'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Klasa I VII',
                competitors: competitors,

            });

        }
    });

});
router.get('/I/VIII',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'I',subdivision:'VIII'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
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
    Current_Edition.find({clas:'Młodzieżowiec',subdivision:'I'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Młodieżowiec I',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowiec/II',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'Młodzieżowiec',subdivision:'II'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Młodieżowiec II',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowiec/III',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'Młodzieżowiec',subdivision:'III'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Młodieżowiec III',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowiec/IV',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'Młodzieżowiec',subdivision:'IV'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Młodieżowiec IV',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowiec/V',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'Młodzieżowiec',subdivision:'V'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Młodieżowiec V',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowiec/VI',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'Młodzieżowiec',subdivision:'VI'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Młodieżowiec VI',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowiec/VII',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'Młodzieżowiec',subdivision:'VII'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Młodieżowiec VII',
                competitors: competitors,

            });

        }
    });

});
router.get('/mlodziezowiec/VIII',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'Młodzieżowiec',subdivision:'VIII'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
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
    Current_Edition.find({clas:'Mistrzowska',subdivision:'I'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Mistrzowska I',
                competitors: competitors,

            });

        }
    });

});
router.get('/mistrzowska/II',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'Mistrzowska',subdivision:'II'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Mistrzowska II',
                competitors: competitors,

            });

        }
    });

});
router.get('/mistrzowska/III',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'Mistrzowska',subdivision:'III'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Mistrzowska III',
                competitors: competitors,

            });

        }
    });

});
router.get('/mistrzowska/IV',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'Mistrzowska',subdivision:'IV'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Mistrzowska IV',
                competitors: competitors,

            });

        }
    });

});
router.get('/mistrzowska/V',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'Mistrzowska',subdivision:'V'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Mistrzowska V',
                competitors: competitors,

            });

        }
    });

});
router.get('/mistrzowska/VI',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'Mistrzowska',subdivision:'VI'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Mistrzowska VI',
                competitors: competitors,

            });

        }
    });

});
router.get('/mistrzowska/VII',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'Mistrzowska',subdivision:'VII'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
                title:'Mistrzowska VII',
                competitors: competitors,

            });

        }
    });

});
router.get('/mistrzowska/VIII',ensureAuthenticated, function(req, res){
    Current_Edition.find({clas:'Mistrzowska',subdivision:'VIII'},function (err, competitors) {
        if(err){
            console.log(err);
        } else {
            res.render('protocol', {
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
    if(req.isAuthenticated() &&  req.user.role!=='Admin'){
        return next();
    } else {
        //req.flash('error_msg','You are not logged in');
        res.redirect('/users/login');
    }
}

module.exports = router;