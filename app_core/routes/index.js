var express = require('express');
var router = express.Router();

var all_stories = require('../../stories/views/stories_views');
var mongoose = require('../../config/mongoose');
var Story = mongoose.model('story');

var React = require('react'),
ReactApp = React.createFactory(require('../components/ReactApp'));

router.get('/', function(req, res, next) {
	// Story.find({}, function(err, users) {
 //       if (err) {
 //         return next(err);
 //       } else {
 //         //res.json(users);
 //         res.render('index',{data:users})
	// }});
	var reactHtml = React.renderToString(ReactApp({}));
	res.render('index',{reactOutput: reactHtml})
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