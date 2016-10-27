var projects = [];

function Project(options){
  this.title = options.title;
  this.description = options.description;
}

Project.prototype.toHTML = function(options){
  var $newProject = $('div.template').clone();
  $newProject.find('h3').text(this.title);
  $newProject.find('p').text(this.description);
  $newProject.removeAttr('class');
  return $newProject;
}

myProjects.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(project) {
  $('div.container').append(project.toHTML());
});

var articleView = {
  handleMainNav: function () {
    $('nav').on('click', '.local', function() {
      $('.section').hide();
      $('#' + $(this).data('content')).fadeIn();
    });
    $('nav .local:first').click();
  }
}
articleView.handleMainNav();
