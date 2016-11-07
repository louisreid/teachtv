/**
 * Video model events
 */

'use strict';

import {EventEmitter} from 'events';
var Video = require('./video.model');
var VideoEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
VideoEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Video.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    VideoEvents.emit(event + ':' + doc._id, doc);
    VideoEvents.emit(event, doc);
  }
}

export default VideoEvents;
