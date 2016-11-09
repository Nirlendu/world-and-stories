var express = require('express');
var router = express.Router();

var React = require('react'),
AllStories = React.createFactory(require('../components/ReactApp'));

router.get('/', function(req, res, next) {
	var reactHtml = React.renderToString(AllStories({}));
	res.render('index',{reactOutput: reactHtml})
});

module.exports = router;