var mongoose = require('../../config/mongoose');
//var Story = mongoose.model('story');

var Promise = require("bluebird");
var Story = Promise.promisifyAll(mongoose.model('story'););

var retrieveAllStories = function(uname, callback) {
  Story.find({}).then(
  	function(stories) {
      callback(null, stories);
    }
  );
};

module.exports = retrieveAllStories;