/**
 * Created by sumitrag-david on 06/05/16.
 */
//TODO entities ID set should be done by rideContainer, somesteps could not be applied to just one entity
var application = '/api/example_api';

var example = {
  'verbosePlural': 'Examples',
  'verbose': 'Example',
  'url': 'EXAMPLE'
};

var entities = {
  'example': example,
};

var callExampleUrls = {
  EXAMPLE: function() {
    return application + '/example/';
  }
};

function getURL(resource) {
  'use strict';
  return callExampleUrls[resource]();
}

function getURLFromEntity(entity) {
  'use strict';
  var model = entities[entity];
  return callCenterUrls[model.url]();
}

function getVerboseFromEntity(entity) {
  'use strict';
  var model = entities[entity];
  return model.verbose;
}






