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
    },
    handleScreenResize: function(){
      $(window).on('resize', function(){
        if(window.innerWidth >= 715){
          $('nav').show();
        }
      });
    }
  };
  articleView.handleMainNav();
  articleView.handleHamburgerClick();
  articleView.handleScreenResize();
  module.articleView = articleView;
}());
