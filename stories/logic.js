
var retrieveAllStories = require('./views/getAllStories')

var rankingStories = function(){
	return retrieveAllStories;
};

module.exports = rankingStories();