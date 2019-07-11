var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
    title: {type: String, required: true},
    genre: {type: String, required: true},
    desc: {type:String, required: true},
    imageUri: {type: String, required: false},
    thumbUri: {type: String, required: false},
    gameUri: {type: String, required: false},
    popularity: {type: Number, default: 0}
});

module.exports = mongoose.model('Game', GameSchema);