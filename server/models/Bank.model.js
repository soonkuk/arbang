var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

var BankSchema = new Schema({
    userId: ObjectId,
    balance: Number
});

module.exports = mongoose.model('Bank', BankSchema);