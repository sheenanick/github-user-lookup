var User = require('./../js/user.js').userModule;

var displayRepos = function(repoNames, repoDescriptions) {
  for (var i = 0; i < repoNames.length; i++) {
    $('#repos').append('<li>' + repoNames[i] + ', <em>' + repoDescriptions[i] + '</em></li>');
  }
}

$(function() {
  var user = new User();
  $('form').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    user.getRepos(username, displayRepos);
  });
});
