'use strict';

page('/about', about);
page('/projects', projects);
page('/resume', resume);
page('/contact', contact);
page();

function about(){
  aboutController.reveal();
}

function projects(){
  projectsController.reveal();
}

function resume(){
  resumeController.reveal();
}

function contact(){
  contactController.reveal();
}
