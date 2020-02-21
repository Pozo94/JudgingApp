var express = require('express');
var router = express.Router();
Competitor=require("../models/competitor");
Judge=require("../models/judge");
User=require("../models/user");
// Get Homepage
router.get('/', function(req, res){

    res.render('index');
});
router.get('/newcompetition',ensureAdmin,function(req,res){
    Competitor.find({},function (err,competitors) {
        competitors.forEach(function (element) {

            var query={_id:element.id};
            element.status=false;

            Competitor.update(query,element,function (err) {
                if(err){
                    console.log(err);
                    return
                }

            })
        })

    })
    Judge.find({},function (err,judges) {
        judges.forEach(function (element) {

            var query={_id:element.id};
            element.status=false;

            Judge.update(query,element,function (err) {
                if(err){
                    console.log(err);
                    return
                }

            })
        })

    })

    User.deleteMany({role:{$ne:'Admin'}},function (err,result) {
        if (err)throw err;
        else console.log(result);


    })
    res.redirect('/');
});
function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        //req.flash('error_msg','You are not logged in');
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