var express = require('express');
var router = express.Router();
var path = require('path');
var React = require('react');
var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
var ReactDOMServer = require('react-dom/server');

var COMMENTS_FILE = path.join(__dirname, '../../comments.json');


router.get(['/', '/another-page'], function(req, res) {
  var ReactRouter = require('react-router');
  var match = ReactRouter.match;
  var RouterContext = React.createFactory(ReactRouter.RouterContext);
  var Provider = React.createFactory(require('react-redux').Provider);
  var routes = require('../../public/routes.js').routes
  var store = require('../../public/redux-store');

  fs.readFileAsync(COMMENTS_FILE).then(
    function(data) {

    var comments = JSON.parse(data);

    var initialState = {
      feedOne: comments,
      url: "/api/stories",
      pollInterval: 2000
    }

    store = store.configureStore(initialState);

    match({routes: routes, location: req.url}, function(error, redirectLocation, renderProps) {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        res.send("<!DOCTYPE html>"+
          ReactDOMServer.renderToString(
            Provider({store: store}, RouterContext(renderProps))
          )
        );
      } else {
        res.status(404).send('Not found')
      }
    });
  });
});


router.get('/api/stories', function(req, res) {
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});


module.exports = router;