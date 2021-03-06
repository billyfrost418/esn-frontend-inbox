const _ = require('lodash');
require('../../../services/selection/selection.service.js');
require('../../../services/filtered-list/filtered-list.js');

(function(angular) {
  'use strict';

  angular.module('linagora.esn.unifiedinbox')

    .controller('inboxListGroupToggleSelectionController', function(inboxSelectionService, inboxFilteredList) {
      var self = this;

      self.toggleSelection = toggleSelection;
      self.hasSelectableItems = hasSelectableItems;
      self.isSelected = isSelected;

      /////

      function toggleSelection() {
        var newSelectedState = !isSelected();

        getSelectableElements().forEach(function(item) {
          inboxSelectionService.toggleItemSelection(item, newSelectedState);
        });
      }

      function getSelectableElements() {
        return _.filter(inboxFilteredList.list(), { selectable: true });
      }

      function hasSelectableItems() {
        return _.some(inboxFilteredList.list(), { selectable: true });
      }

      function isSelected() {
        return _.every(getSelectableElements(), { selected: true });
      }
    });

})(angular);
