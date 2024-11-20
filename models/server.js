var mongoose = require('mongoose')
var Schema = mongoose.Schema

var serverSchema = new Schema({
  title: String,
  nick: {
    type: String,
    unique: true,
    required: true
  },
  avatar: String,
  desc: String,
  created:{
    type:Date,
    default:Date.now
  }
})
module.exports.Server = mongoose.model("Server", serverSchema)

