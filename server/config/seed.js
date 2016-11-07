/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Video from '../api/video/video.model';

console.log("THIS IS SEEEDDDDJS");

Video.find({}).removeAsync()
  .then(() => {
    Video.create({
      youtubeid: 'se4cgYFaVas'
    }, {
      youtubeid: 'ZblSqpMD61M'
    }, {
      youtubeid: 'IXKGnyk9ee0'
    });
  });


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
