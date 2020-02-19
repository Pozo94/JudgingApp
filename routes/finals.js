var express = require('express');
var router = express.Router();
var Competitor =require('../models/competitor')
var FX={FX:-1};
var PH={PH:-1};
var SR={SR:-1};
var VT={VT:-1};
var PB={PB:-1};
var HB={HB:-1};

router.get('/', function (req, res) {
    res.render('clas');

});

router.get('/mistrzowska', function (req, res) {

    res.render('apparatus');

});

router.get('/mistrzowska/FX', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'Mistrzowska'}).sort(FX).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/FX', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });


});

router.get('/mistrzowska/PH', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'Mistrzowska'}).sort(PH).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/PH', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });
});

router.get('/mistrzowska/SR', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'Mistrzowska'}).sort(SR).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/SR', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});

router.get('/mistrzowska/VT', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'Mistrzowska'}).sort(VT).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/VT', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});

router.get('/mistrzowska/PB', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'Mistrzowska'}).sort(PB).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/PB', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});

router.get('/mistrzowska/HB', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'Mistrzowska'}).sort(HB).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/HB', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});

router.get('/mlodziezowiec', function (req, res) {
    res.render('apparatus');

});

router.get('/mlodziezowa/FX', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'Młodzieżowa'}).sort(FX).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/FX', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/mlodziezowa/PH', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'Młodzieżowa'}).sort(PH).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/PH', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/mlodziezowa/SR', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'Młodzieżowa'}).sort(SR).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/SR', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/mlodziezowa/VT', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'Młodzieżowa'}).sort(VT).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/VT', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/mlodziezowa/PB', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'Młodzieżowa'}).sort(PB).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/PB', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/mlodziezowa/HB', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'Młodzieżowa'}).sort(HB).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/HB', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});


router.get('/I', function (req, res) {
    res.render('apparatus');


});

router.get('/I/FX', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'I'}).sort(FX).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/FX', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/I/PH', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'I'}).sort(PH).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/PH', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/I/SR', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'I'}).sort(SR).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/SR', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/I/VT', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'I'}).sort(VT).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/VT', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/I/PB', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'I'}).sort(PB).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/PB', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/I/HB', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'I'}).sort(HB).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/HB', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/II', function (req, res) {
    res.render('apparatus');


});
router.get('/II/FX', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'II'}).sort(FX).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/FX', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/II/PH', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'II'}).sort(PH).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/PH', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/II/SR', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'II'}).sort(SR).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/SR', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/II/VT', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'II'}).sort(VT).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/VT', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/II/PB', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'II'}).sort(PB).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/PB', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/II/HB', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'II'}).sort(HB).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/HB', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});

router.get('/III', function (req, res) {
    get2Finals();
    res.render('apparatus');

});
router.get('/III/FX', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'III'}).sort(FX).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/FX', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/III/PH', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'III'}).sort(PH).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/PH', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/III/SR', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'III'}).sort(SR).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/SR', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/III/VT', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'III'}).sort(VT).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/VT', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/III/PB', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'III'}).sort(PB).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/PB', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/III/HB', function (req, res) {

    Competitor.db.collection('competitors').find({'clas':'III'}).sort(HB).toArray( function(err, competitors){
        if(err){
            console.log(err);
        } else {
            res.render('Apparatus/HB', {
                title:'Klasa mlodziezowa',
                competitors: competitors
            });
        }
    });

});
router.get('/mlodziezowa', function (req, res) {
    res.render('apparatus');

});
async function get2Finals(){

    var fx=[];
    var ph=[];
    var sr=[];
    var vt=[];
    var pb=[];
    var hb=[];

    Competitor.db.collection('competitors').find({'clas':'Mistrzowska'}).sort(HB).toArray(function (err,competitor){
        for(i=0;i<competitor.length;i++){

            fx[i]=competitor[i].valueOf();
            ph[i]=competitor[i].valueOf();
            sr[i]=competitor[i].valueOf();
            vt[i]=competitor[i].valueOf();
            pb[i]=competitor[i].valueOf();
            hb[i]=competitor[i].valueOf();
        }
        //console.log(fx[0].FX.Final);
        fx.sort(function (a,b) {

            return parseFloat(a.FX.Final) - parseFloat(b.FX.Final);


        });
        console.log(fx[0].FX.Final);
        /*console.log(fx[0].valueOf());

        console.log(competitor[0]);*/
    });



}







module.exports = router;