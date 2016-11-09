'use strict';

(function(module){
  var project = {};
  project.allProjects = [];

  function Project(options){
    this.title = options.title;
    this.description = options.description;
    this.wordCount = project.countWordsInDescription(options);
  }
  Project.prototype.toHTML = function(){
    var source = $('#projects-template').html();
    var templateRender = Handlebars.compile(source);
    return templateRender(this);
  };

  project.countWordsInDescription = function(proj){
    return 'Words: ' + proj.description.split(' ')
    .map(function(){
      return 1;
    })
    .reduce(function(count, increment){
      return count + increment;
    }, 0);
  };

  project.loadProjects = function(data){
    data.forEach(function(item){
      project.allProjects.push(new Project(item));
    });
  };

  project.renderIndexPage = function(){
    project.allProjects.forEach(function(proj) {
      $('section#projects').append(proj.toHTML());
    });
  };
  project.getNewProjects = function(){
    $.getJSON( 'data/projects.json', function(data, msg, xhr) {
      project.loadProjects(data);
      var stringData = JSON.stringify(data);
      localStorage.setItem('blogArticles', stringData);
      project.renderIndexPage();
      localStorage.setItem('eTag', xhr.getResponseHeader('eTag'));
    });
  };

  project.fetchProjects = function() {
    if (localStorage.projects) {
      $.ajax({
        type: 'HEAD',
        url: 'data/projects.json',
        complete: function(xhr) {
          var newETag = xhr.getResponseHeader('eTag');
          if(newETag === localStorage.getItem('eTag')){
            data = localStorage.getItem('projects');
            var parsedData = JSON.parse(data);
            project.loadProjects(parsedData);
            project.renderIndexPage();
          }
          else{
            project.getNewProjects();
          }
        }
      });
    } else {
      project.getNewProjects();
    }
  };

  module.project = project;
})(window);
