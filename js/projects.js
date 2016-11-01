'use strict';

var projects = [];

function Project(options){
  this.title = options.title;
  this.description = options.description;
}

Project.prototype.toHTML = function(){
  var source = $('#projects-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

function loadProjects(data){
  for (var i = 0; i < data.length; i++) {
    projects.push(new Project(data[i]));
  }
}
function renderIndexPage(){
  projects.forEach(function(project) {
    $('section#projects').append(project.toHTML());
  });
}

function fetchProjects() {
  if (localStorage.projects) {
    $.ajax({
      type: 'HEAD',
      url: 'data/projects.json',
      complete: function(xhr) {
        var newETag = xhr.getResponseHeader('eTag');
        if(newETag === localStorage.getItem('eTag')){
          data = localStorage.getItem('projects');
          var parsedData = JSON.parse(data);
          loadProjects(parsedData);
          renderIndexPage();
        }
        else{
          getNewProjects();
        }
      }
    });
  } else {
    getNewProjects();
  }
};
function getNewProjects(){
  $.getJSON( 'data/projects.json', function(data, msg, xhr) {
    loadProjects(data);
    var stringData = JSON.stringify(data);
    localStorage.setItem('blogArticles', stringData);
    renderIndexPage();
    localStorage.setItem('eTag', xhr.getResponseHeader('eTag'));
  });
}


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
fetchProjects();
