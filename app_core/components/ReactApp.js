/** @jsx React.DOM */

var React = require('react');

var all_stories = require('../../stories/views/stories_views')();
var mongoose = require('../../config/mongoose');
var Story = mongoose.model('story');

var resultsPerPage = 200;

var ReactApp = React.createClass({

      render: function () {
        return (
          <div>{all_stories}</div>
          )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;