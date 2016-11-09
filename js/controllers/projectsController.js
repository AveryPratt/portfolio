'use strict';

(function(module) {
  var projectsController = {};

  projectsController.reveal = function() {
    $('.section').hide();
    $('#projects').show();
    $('#repos').show();
  };

  module.projectsController = projectsController;
})(window);
