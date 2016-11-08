(function(module) {
  var resumeController = {};

  resumeController.reveal = function() {
    $('.section').hide();
    $('#resume').show();
  };

  module.resumeController = resumeController;
})(window);
