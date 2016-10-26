var projects = [];
var myProjects = [
  {
    title: 'Salmon Cookies',
    description: 'A website for measuring the number of cookies sold by various branches of a cookie stand in the Seattle area'
  },
  {
    title: 'Bus Mall',
    description: 'A marketing survey to determine the popularity of various products'
  },
  {
    title: 'Jigsaw Puzzle',
    description: 'How fast can you complete a puzzle without making a fatal mistake? Play against your friends to see who can solve the puzzle faster.'
  },
  {
    title: 'Orbitroids',
    description: 'The game asteriods, but with gravity!'
  },
  {
    title: 'Rocket Calculator',
    description: 'Can you compete with Elon Musk? Rocket Calculator is a calculator to determine the deltaV, specific impulse, thrust, and thrust/weight ratios of multi-stage rockets.'
  }
];

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

console.log('loaded');
