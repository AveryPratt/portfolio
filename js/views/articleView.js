'use strict';

var articleView = {
  handleMainNav: function () {
    $('nav').on('click', '.local', function() {
      $('.section').hide();
      $('#' + $(this).data('content')).fadeIn();
    });
    $('nav .local:first').click();
  }
};
articleView.handleMainNav();
