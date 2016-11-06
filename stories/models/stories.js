var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function(){
	var StorySchema = new Schema({
		story_title : String,
	    story_content : String,
	});
	mongoose.model('story', StorySchema);
};