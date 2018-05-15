var jwt = require('jwt-simple');
var bcrypt = require('bcrypt-nodejs');

var user = require('./models/user');

var express = require('express');

var router = express.Router();

router.post('/register', (req, res) => {
	var userModel = new user(req.body);
	userModel.save((err) => {
		if (err) {
			console.error("Failed to save the model, error: ", err);
			res.send(500, err);
		}
	})
	res.send(200, userModel);
})

router.post('/login', async (req, res) => {
	var loginData = req.body;
	var userModel = await user.findOne({ email: loginData.email });
	if (!userModel) {
		return res.send(401, 'Invalid user name or password');
	}

	// Compare the passwords
	bcrypt.compare(loginData.password, userModel.password, (err, result) => {
		if(!result) {
			return res.send(401, 'Invalid user name or password');
		}
	});
	
	var token = jwt.encode(userModel.email, 'ABC');

	res.send(200, { token });
})

module.exports = router;