var mongoose = require('../../config/mongoose');
var Story = mongoose.model('story');

var all_stories = function(){
 // 	var story = new Story({'story_title':'One','story_content':'Two'});
 // 	story.save(function(err) {
 //       if (err) {
 //         return next(err);
 //       }
 //		});
 	Story.find({}, function(err, users) {
       if (err) {
         return next(err);
       } else {
         return JSON.stringify(users);
	}});
 };

module.exports = all_stories();