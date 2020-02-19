var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var ParticipantSchema = mongoose.Schema({
    competitor:{
        type: String
    },
    score:{
        type:Number
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    }

});

var League=module.exports = mongoose.model('League',ParticipantSchema);
module.exports.addParticipant = function(newUser, callback){

    newUser.save(callback);


}
