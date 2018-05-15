var mongoose = require('mongoose');

var feeds = mongoose.model('feeds', {
	message: String,
	author: { type: mongoose.Schema.Types.ObjectId, ref: 'user'}
})

module.exports = feeds;