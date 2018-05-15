var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	email: String,
	password: String,
	name: String,
	description: String
});

userSchema.pre('save', function(next) {
	var user = this;

	// If the password is not modified return
	if(!user.isModified('password')) {
		return next();
	}
	// encrypt the password
	bcrypt.hash(user.password, null, null, (err,res)=> {
		if(err) {
			return next(err);
		}
		//Set the hash password to the model
		user.password = res;
		return next();
	});
});

module.exports = mongoose.model('user', userSchema);