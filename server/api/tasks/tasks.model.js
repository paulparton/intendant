var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  body: String
});

module.exports = mongoose.model('Task', TaskSchema);