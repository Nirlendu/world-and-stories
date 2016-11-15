var mongoose = require('../../config/mongoose');
mongoose.Promise = require('bluebird');
var Story = mongoose.model('story');

//var Promise = require("bluebird");
//var Story = Promise.promisifyAll(mongoose.model('story'););

// var retrieveAllStories = function(uname, callback) {
//   Story.find({}, function(err, stories) {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, stories);
//     }
//   });
// };

var retrieveAllStories = function() {
	var promise = Story.find({}).exec();
	promise.then(function(stories) {
	  console.log('Stories fetched: ' + stories);
	})
	.then(function(stories) {
	  return stories;
	})
	.catch(function(err){
	  console.log('error:', err);
	});
};

module.exports = retrieveAllStories();