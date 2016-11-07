/** @jsx React.DOM */

var React = require('react');

var all_stories = require('../../stories/views/stories_views');

var resultsPerPage = 200;

var elements;

all_stories({}, function(err, stories) {
  if (err) {
    console.log(err);
  }
  elements = JSON.stringify(stories);
});

var ReactApp = React.createClass({
    render: function () {
      return (
        <div>{elements}</div>
        )
    }
});

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;