var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var JudgeSchema = mongoose.Schema({
    username: {
        type: String,
        index:true
    },
    password: {
        type: String
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    }

});

var Judge = module.exports = mongoose.model('Judge', JudgeSchema);

module.exports.createUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.getUserByUsername = function(username, callback){
    var query = {username: username};
    Judge.findOne(query, callback);
}
module.exports.getUserByName = function(firstname,lastname, callback){
    var query = {firstname: firstname,lastname:lastname};
    Judge.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
    Judge.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
}