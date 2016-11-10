'use strict';

(function(module) {
  var repos = {};

  repos.allRepos = [];
// TODO: create a githubToken.js file that we can use to generate our headers
         // properly.
        //  DONE
  repos.requestRepos = function(callback) {
    /* TODO: How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    $.get('/github/users/AveryPratt/repos', function(data) {
      console.log(data);
      repos.allRepos = data;
      callback();
    });


  };

  repos.withTheAttribute = function(myAttr) {
    /* NOTE: This Model method filters the full repos collection based
        on a particular attribute. For example, you could use this
        to filter all repos that have a forks_count, stargazers_count,
        or watchers_count. */
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.repos = repos;
})(window);