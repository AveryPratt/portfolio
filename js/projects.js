var projects = [];

function Project(options){
  this.title = options.title;
  this.description = options.description;
}

Project.prototype.toHTML = function(options){
  // var $newProject = $('div.template').clone();
  // $newProject.find('h3').text(this.title);
  // $newProject.find('p').text(this.description);
  // $newProject.removeAttr('class');
  // return $newProject;
  var source = $('#projects-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
}

myProjects.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(project) {
  $('section#projects').append(project.toHTML());
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
