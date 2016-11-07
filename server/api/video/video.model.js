'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var VideoSchema = new mongoose.Schema({
  youtubeid: String,
});

export default mongoose.model('Video', VideoSchema);
