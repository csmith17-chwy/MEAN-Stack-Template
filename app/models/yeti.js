// Grab the mongoose module
var mongoose = require('mongoose');

// *Define Yeti model*
// module.exports allows us to pass this to other files when it is called
// For more fields refer to Mongoose docs
module.exports = mongoose.model('Yeti', {
    name : {type : String, default: ''}
});
