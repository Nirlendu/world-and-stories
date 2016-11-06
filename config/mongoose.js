var database = require('../config/database');
var mongoose = require('mongoose');
module.exports = (function() {
    var db = mongoose.connect(database.url);
    require('../stories/models/stories')();
	return db; 
})();