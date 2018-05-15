var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var user = require('./models/user');
var feeds = require('./models/feeds');

var authRouter = require('./auth');

var app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/feeds/:id', (req, res) => {
	try {
		var feedsData = await feeds.findById(req.params.id);
		res.send(200, userData);
	} catch (error) {
		console.error(error);
		res.send(500, eror);
	}
})

app.post('/feeds', (req, res) => {
	var feedsModel = new feeds(req.body);
	feedsModel.author = '5aa2cff58d5d7a09b8387215';

	feedsModel.save((err) => {
		if (err) {
			console.error("Failed to save the feeds model, error: ", err);
			res.send(500, err);
		}
	})
	res.send(200, feedsModel);
})

app.get('/users', async (req, res) => {
	try {
		var users = await user.find({}, "-password -__v");
		res.send(200, users);
	} catch (error) {
		console.error(error);
		res.send(500, eror);
	}
})

app.get('/users/:id', async (req, res) => {
	try {
		var userData = await user.findById(req.params.id, "-password -__v");
		res.send(200, userData);
	} catch (error) {
		console.error(error);
		res.send(500, eror);
	}
})

mongoose.connect('mongodb://test:test@ds157818.mlab.com:57818/vargese_mongolab', (err) => {
	if (!err) {
		console.log('Connected to mongoDB');
	}
});

app.use('/auth', authRouter);
app.listen(4000);