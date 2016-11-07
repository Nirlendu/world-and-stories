var mongoose = require('../../config/mongoose');
var Story = mongoose.model('story');

var retrieveStories = function(uname, callback) {
  Story.find({}, function(err, stories) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, stories);
    }
  });
};

module.exports = retrieveStories;