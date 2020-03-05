var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
	user: {
		type: String,
		index:true
	},
	firstname:{
		type:String
	},
	lastname:{
		type:String
	},
    role:{
        type:String
    },
    apparatus:{
        type:String
    }

});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){

	        newUser.save(callback);


}

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.getUserById2 = function(id, callback){
    var query={user:id};
	User.findOne(query, callback);
}
module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}
