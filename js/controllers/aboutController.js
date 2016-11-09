'use strict';

(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('.section').hide();
    $('#aboutme').show();
  };

  module.aboutController = aboutController;
})(window);
