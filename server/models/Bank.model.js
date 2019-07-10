var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BankSchema = new Schema({
    // title: {type: String, required: true},
    // genre: {type: String, required: true},
    // desc: {type:String, required: true},
    // image_uri: {type: String, required: false},
    // thumb_uri: {type: String, required: false},
    // game_uri: {type: String, required: false},
    // popularity: {type: Number, default: 0}
});

module.exports = mongoose.model('Bank', GameSchema);