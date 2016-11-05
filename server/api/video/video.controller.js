'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var Video = require('./video.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

export function create(req,res){
  Video.createAsync(req.body)
    .then(respondWithResult(res))
    .catch(handleError(500));
};

export function getAll(req,res){
  Video.findAsync()
  .then(respondWithResult(res))
  .catch(handleError(res))
}

export function getById(req,res){
  console.log('helllooo');
  Video.findByIdAsync(req.params.id)
  .then(handleEntityNotFound(res))
  .then(respondWithResult(res))
  .catch(handleError(res))
}

export function deleteVideo(req, res) {
  Video.findOneAndRemoveAsync(req.params.id)
  .then(function(){
    res.status(204).end();
  })
  .catch(handleError(res));
}

export function update(req,res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Video.findOneAndUpdateAsync(req.params.id, req.body, {new: true})
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Old auto generated controller (yo angular-fullstack:endpoint)

// /**
//  * Using Rails-like standard naming convention for endpoints.
//  * GET     /api/videos              ->  index
//  * POST    /api/videos              ->  create
//  * GET     /api/videos/:id          ->  show
//  * PUT     /api/videos/:id          ->  update
//  * DELETE  /api/videos/:id          ->  destroy
//  */

// 'use strict';

// import _ from 'lodash';
// import Video from './video.model';

// function respondWithResult(res, statusCode) {
//   statusCode = statusCode || 200;
//   return function(entity) {
//     if (entity) {
//       res.status(statusCode).json(entity);
//     }
//   };
// }

// function saveUpdates(updates) {
//   return function(entity) {
//     var updated = _.merge(entity, updates);
//     return updated.saveAsync()
//       .spread(updated => {
//         return updated;
//       });
//   };
// }

// function removeEntity(res) {
//   return function(entity) {
//     if (entity) {
//       return entity.removeAsync()
//         .then(() => {
//           res.status(204).end();
//         });
//     }
//   };
// }

// function handleEntityNotFound(res) {
//   return function(entity) {
//     if (!entity) {
//       res.status(404).end();
//       return null;
//     }
//     return entity;
//   };
// }

// function handleError(res, statusCode) {
//   statusCode = statusCode || 500;
//   return function(err) {
//     res.status(statusCode).send(err);
//   };
// }

// // Gets a list of Videos
// export function index(req, res) {
//   Video.findAsync()
//     .then(respondWithResult(res))
//     .catch(handleError(res));
// }

// // Gets a single Video from the DB
// export function show(req, res) {
//   Video.findByIdAsync(req.params.id)
//     .then(handleEntityNotFound(res))
//     .then(respondWithResult(res))
//     .catch(handleError(res));
// }

// // Creates a new Video in the DB
// export function create(req, res) {
//   Video.createAsync(req.body)
//     .then(respondWithResult(res, 201))
//     .catch(handleError(res));
// }

// // Updates an existing Video in the DB
// export function update(req, res) {
//   if (req.body._id) {
//     delete req.body._id;
//   }
//   Video.findByIdAsync(req.params.id)
//     .then(handleEntityNotFound(res))
//     .then(saveUpdates(req.body))
//     .then(respondWithResult(res))
//     .catch(handleError(res));
// }

// // Deletes a Video from the DB
// export function destroy(req, res) {
//   Video.findByIdAsync(req.params.id)
//     .then(handleEntityNotFound(res))
//     .then(removeEntity(res))
//     .catch(handleError(res));
// }
