var express = require('express');
var router = express.Router();

var all_stories = require('../../stories/views/stories_views');
var mongoose = require('../../config/mongoose');
var Story = mongoose.model('story');

router.get('/', function(req, res, next) {
	Story.find({}, function(err, users) {
       if (err) {
         return next(err);
       } else {
         res.json(users);
	}});
});

router.get('/get', function(req, res, next) {
 	Story.find({}, function(err, users) {
       if (err) {
         return next(err);
       } else {
         res.json(users);
	}});
});

module.exports = router;