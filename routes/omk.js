var express = require('express');
var router = express.Router();
var Competitor = require('../models/competitor');
var Current_Edition = require('../models/OMK');
var current = "omks";
var method_FX = {'FX.Final': -1};
var method_PH = {'PH.Final': -1};
var method_SR = {'SR.Final': -1};
var method_VT = {'VT': -1};
var method_PB = {'PB.Final': -1};
var method_HB = {'HB.Final': -1};
router.get('/', function (req, res) {
    res.render("omk_results")
})

router.get('/gr1/fx', function (req, res) {
    Current_Edition.db.collection(current).find({
        clas: 'Grupa_1'

    }).sort(method_FX).toArray(function (err, competitors) {
        if (err) {
            console.log(err);
        } else {

            res.render('omk', {
                title: 'Grupa 1 Ćwiczenia Wolne',
                competitors: competitors,
                apparatus:'FX'
            });
        }

    })
});
router.get('/gr2/fx', function (req, res) {
    Current_Edition.db.collection(current).find({
        clas: "Grupa_2"

    }).sort(method_FX).toArray(function (err, competitors) {
        if (err) {
            console.log(err);
        } else {

            res.render('omk', {
                title: 'Grupa 2 Ćwiczenia Wolne',
                competitors: competitors,
                apparatus:'FX'
            });
        }

    })
});
router.get('/gr3/fx', function (req, res) {
    Current_Edition.db.collection(current).find({
        clas: "Grupa_3"

    }).sort(method_FX).toArray(function (err, competitors) {
        if (err) {
            console.log(err);
        } else {

            res.render('omk', {
                title: 'Grupa 3 Ćwiczenia Wolne',
                competitors: competitors,
                apparatus:'FX'
            });
        }

    })
});
router.get('/gr1/ph', function (req, res) {
    Current_Edition.db.collection(current).find({
        clas: "Grupa_1"

    }).sort(method_PH).toArray(function (err, competitors) {
        if (err) {
            console.log(err);
        } else {
            console.log(competitors)
            res.render('omk', {
                title: 'Grupa 1 Koń z łękami',
                competitors: competitors,
                apparatus:'PH'
            });
        }

    })
});
router.get('/gr2/ph', function (req, res) {
    Current_Edition.db.collection(current).find({
        clas: "Grupa_2"

    }).sort(method_PH).toArray(function (err, competitors) {
        if (err) {
            console.log(err);
        } else {

            res.render('omk', {
                title: 'Grupa 2 Koń z łękami',
                competitors: competitors,
                apparatus:'PH'
            });
        }

    })
});
router.get('/gr3/ph', function (req, res) {
    Current_Edition.db.collection(current).find({
        clas: "Grupa_3"

    }).sort(method_PH).toArray(function (err, competitors) {
        if (err) {
            console.log(err);
        } else {

            res.render('omk', {
                title: 'Grupa 3 Koń z łękami',
                competitors: competitors,
                apparatus:'PH'
            });
        }

    })
});
router.get('/gr1/sr', function (req, res) {
    Current_Edition.db.collection(current).find({
        clas: "Grupa_1"

    }).sort(method_SR).toArray(function (err, competitors) {
        if (err) {
            console.log(err);
        } else {

            res.render('omk', {
                title: 'Grupa 1 Kółka',
                competitors: competitors,
                apparatus:'SR'
            });
        }

    })
});
router.get('/gr2/sr', function (req, res) {
    Current_Edition.db.collection(current).find({
        clas: "Grupa_2"

    }).sort(method_SR).toArray(function (err, competitors) {
        if (err) {
            console.log(err);
        } else {

            res.render('omk', {
                title: 'Grupa 2 Kółka',
                competitors: competitors,
                apparatus:'SR'
            });
        }

    })
});
router.get('/gr3/sr', function (req, res) {
    Current_Edition.db.collection(current).find({
        clas: "Grupa_3"

    }).sort(method_SR).toArray(function (err, competitors) {
        if (err) {
            console.log(err);
        } else {

            res.render('omk', {
                title: 'Grupa 3 Kółka',
                competitors: competitors,
                apparatus:'SR'
            });
        }

    })
});
router.get('/gr1/vt', function (req, res) {
    Current_Edition.db.collection(current).find({
        clas: "Grupa_1"

    }).sort(method_VT).toArray(function (err, competitors) {
        if (err) {
            console.log(err);
        } else {

            res.render('omk', {
                title: 'Grupa 1 Skok',
                competitors: competitors,
                apparatus:'VT'
            });
        }

    })
});
router.get('/gr2/vt', function (req, res) {
    Current_Edition.db.collection(current).find({
        clas: "Grupa_2"

    }).sort(method_VT).toArray(function (err, competitors) {
        if (err) {
            console.log(err);
        } else {

            res.render('omk', {
                title: 'Grupa 2 Skok',
                competitors: competitors,
                apparatus:'VT'
            });
        }

    })
});
router.get('/gr3/vt', function (req, res) {
    Current_Edition.db.collection(current).find({
        clas: "Grupa_3"

    }).sort(method_VT).toArray(function (err, competitors) {
        if (err) {
            console.log(err);
        } else {

            res.render('omk', {
                title: 'Grupa 3 Skok',
                competitors: competitors,
                apparatus:'VT'
            });
        }

    })
});
router.get('/gr1/pb', function (req, res) {
    Current_Edition.db.collection(current).find({
        clas: "Grupa_1"

    }).sort(method_PB).toArray(function (err, competitors) {
        if (err) {
            console.log(err);
        } else {

            res.render('omk', {
                title: 'Grupa 1 Poręcze',
                competitors: competitors,
                apparatus:'PB'
            });
        }

    })
});
router.get('/gr2/pb', function (req, res) {
    Current_Edition.db.collection(current).find({
        clas: "Grupa_2"

    }).sort(method_PB).toArray(function (err, competitors) {
        if (err) {
            console.log(err);
        } else {

            res.render('omk', {
                title: 'Grupa 2 Poręcze',
                competitors: competitors,
                apparatus:'PB'
            });
        }

    })
});
router.get('/gr3/pb', function (req, res) {
    Current_Edition.db.collection(current).find({
        clas: "Grupa_3"

    }).sort(method_PB).toArray(function (err, competitors) {
        if (err) {
            console.log(err);
        } else {

            res.render('omk', {
                title: 'Grupa 3 Poręcze',
                competitors: competitors,
                apparatus:'PB'
            });
        }

    })
});
router.get('/gr1/hb', function (req, res) {
    Current_Edition.db.collection(current).find({
        clas: "Grupa_1"

    }).sort(method_HB).toArray(function (err, competitors) {
        if (err) {
            console.log(err);
        } else {

            res.render('omk', {
                title: 'Grupa 1 Drążek',
                competitors: competitors,
                apparatus:'HB'
            });
        }

    })
});
router.get('/gr2/hb', function (req, res) {
    Current_Edition.db.collection(current).find({
        clas: "Grupa_2"

    }).sort(method_HB).toArray(function (err, competitors) {
        if (err) {
            console.log(err);
        } else {

            res.render('omk', {
                title: 'Grupa 2 Drążek',
                competitors: competitors,
                apparatus:'HB'
            });
        }

    })
});
router.get('/gr3/hb', function (req, res) {
    Current_Edition.db.collection(current).find({
        clas: "Grupa_3"

    }).sort(method_HB).toArray(function (err, competitors) {
        if (err) {
            console.log(err);
        } else {

            res.render('omk', {
                title: 'Grupa 3 Drążek',
                competitors: competitors,
                apparatus:'HB'
            });
        }

    })
});
module.exports = router;