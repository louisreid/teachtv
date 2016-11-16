/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Video from '../api/video/video.model';
var assessment = require('../seed/assessment.js').assessment;
var behaviour = require('../seed/behaviour.js').behaviour;

Video.find({}).removeAsync()
  .then(() => {
    Video.createAsync(assessment).then(() => {
      console.log('finished populating assessment videos');
    });
  });

Video.find({}).removeAsync()
  .then(() => {
    Video.createAsync (behaviour).then(() => {
      console.log('finished populating behaviour videos');
    });
  });

// var videoArray = [];
// for (var i = 1; i < 200; i++) {
//   videoArray.push({
//     youtubeid: 'i0dCwNT7JZc'
//   })
// }
// Video.createAsync(videoArray)
//   .then(() => {
//     console.log('finished populuting crazy lots of syllabuses');
//   });


User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin'
      })
      .then(() => {
        console.log('finished populating users');
      });
  });
