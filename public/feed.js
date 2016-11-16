var React = require('react');
var ReactRedux = require('react-redux');
var marked = require('marked');
var connect = ReactRedux.connect;

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
    var feedStories = this.props.feedOne.map(function(story) {
      return (
        <Stories title={story.story_title} content={story.story_content} key={story.id}></Stories>
      );
    });
    return (
      <div className="commentList">
        {feedStories}
      </div>
    );
  }
});

var FeedListOneState = function(state) {
  return {
    feedOne: state.feedOne
  }
}

FeedListOne = connect(
  FeedListOneState
)(FeedListOne)

module.exports = Feed;