'use strict';

(function(module){
  var articleView = {
    handleMainNav: function () {
      $('nav').on('click', '.local', function() {
        $('.section').hide();
        $('#' + $(this).data('content')).fadeIn();
      });
      $('nav .local:first').click();
    },
    handleHamburgerClick: function () {
      $('.hamburger').on('click', function() {
        $('nav').toggle();
        // $('nav:hidden').show();
      });
    }
  };
  articleView.handleMainNav();
  articleView.handleHamburgerClick();
  module.articleView = articleView;
}());
