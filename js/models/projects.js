'use strict';

var projects = [];

function Project(options){
  this.title = options.title;
  this.description = options.description;
  this.wordCount = countWordsInDescription(options);
}
Project.prototype.toHTML = function(){
  var source = $('#projects-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

function countWordsInDescription(project){
  return 'Words: ' + project.description.split(' ')
  .map(function(){
    return 1;
  })
  .reduce(function(count, increment){
    return count + increment;
  }, 0);
}
function loadProjects(data){
  data.forEach(function(item){
    projects.push(new Project(item));
  });
}
function renderIndexPage(){
  projects.forEach(function(project) {
    $('section#projects').append(project.toHTML());
  });
}
function getNewProjects(){
  $.getJSON( 'data/projects.json', function(data, msg, xhr) {
    loadProjects(data);
    var stringData = JSON.stringify(data);
    localStorage.setItem('blogArticles', stringData);
    renderIndexPage();
    localStorage.setItem('eTag', xhr.getResponseHeader('eTag'));
  });
}
(function fetchProjects() {
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
}());
