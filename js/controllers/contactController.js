'use strict';

(function(module) {
  var contactController = {};

  contactController.reveal = function() {
    $('.section').hide();
    $('#contact').show();
  };

  module.contactController = contactController;
})(window);
