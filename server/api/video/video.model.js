'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var VideoSchema = new mongoose.Schema({
  // youtubeid: String
  data: []
  // youtubeid: String,
  // snippet: [{
  //   publishedAt: String,
  //   channelId: String,
  //   title: String,
  //   description: String,
  //   thumbnails: [{
  //     default: {
  //       url: String,
  //       width: Number,
  //       height: Number
  //     },
  //     medium: {
  //       url: String,
  //       width: Number,
  //       height: Number
  //     },
  //     high: {
  //       url: String,
  //       width: Number,
  //       height: Number
  //     },
  //     standard: {
  //       url: String,
  //       width: Number,
  //       height: Number
  //     },
  //     maxres: {
  //       url: String,
  //       width: Number,
  //       height: Number
  //     }
  //   }],
  //   channelTitle: String,
  //   tags: [String],
  //   categoryId: String,
  //   liveBroadcastContent: String,
  //   localized: [{
  //     title: String,
  //     description: String
  //   }]
  // }],
  // statistics: [{
  //   viewCount: Number,
  //   likeCount: Number,
  //   dislikeCount: Number,
  //   favoriteCount: Number,
  //   commentCount: Number
  // }]
});

export default mongoose.model('Video', VideoSchema);
