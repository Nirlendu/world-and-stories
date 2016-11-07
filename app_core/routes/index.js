var express = require('express');
var router = express.Router();

var React = require('react'),
ReactApp = React.createFactory(require('../components/ReactApp'));

router.get('/', function(req, res, next) {
	var reactHtml = React.renderToString(ReactApp({}));
	res.render('index',{reactOutput: reactHtml})
});

module.exports = router;