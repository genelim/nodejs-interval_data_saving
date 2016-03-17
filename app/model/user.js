module.exports = function (connection) {
  	var mongoose    = require('mongoose'),
        Schema      = mongoose.Schema;

  	var user = new mongoose.Schema({
        username 	: String,
        password  	: String
	});
    
  	return connection.model('User', user);
}