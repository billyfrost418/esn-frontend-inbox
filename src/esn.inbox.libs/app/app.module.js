'use strict';

angular.module('esn.inbox.libs', [
   'restangular',
   'esn.http'
]);

require('esn-frontend-common-libs/src/frontend/js/modules/http.js');
require('./app.config');
require('./app.constants');
require('./services/inbox-restangular.service');
