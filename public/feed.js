var React = require('react');
var ReactRedux = require('react-redux');
var marked = require('marked');

var Stories = React.createClass({
  render: function() {
    return (
      <div class="content">
      <div class="feed-half">
        <div class="well stories">
          <div class="story-image">
              <img src="test2.jpg" class="img-rounded"/>
          </div>
          <div class="story-title">
            {this.props.title}
          </div>
          <div class="story-content">
            {this.props.content}
          </div>
        </div>
      </div>
      <div class="feed-half"></div>
    </div>
    );
  }
});

var Feed = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Feed</h1>
        <FeedListOne/>
      </div>
    );
  }
});

var FeedListOne = React.createClass({
  render: function() {
    var feedStories = this.props.storiesOne.map(function(story) {
      return (
        <Stories title={story.title} content={story.content} key={story.id}></Stories>
      );
    });
    return (
      <div className="commentList">
        {feedStories}
      </div>
    );
  }
});

module.exports = Feed;