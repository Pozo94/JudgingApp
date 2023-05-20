var mongoose = require('mongoose');
var db = mongoose.connection;

var CompetitorSchema=mongoose.Schema({

    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String
        ,
        required:true
    },
    club:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    clas:{
        type:String,
        required:true
    },
    subdivision:{
        type:String,
        default: false
    },
    order:{
      type:Number,
      default:false
    },
    status:{
        type:Boolean,
        default:false
    }



});

var Competitor=module.exports = mongoose.model('Competitor',CompetitorSchema);
module.exports.createCompetitor=function(newCompetitor, callback){

            newCompetitor.save(callback);


    };
module.exports.getUserByName = function(firstname,lastname, callback){
    var query = {firstname: firstname,lastname:lastname};
    Competitor.findOne(query, callback);
}