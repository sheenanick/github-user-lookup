var User = require('./../js/user.js').userModule;

var displayRepoNames = function(repoNames) {
  for (var i = 0; i < repoNames.length; i++) {
    $('#repoNames').append('<li>' + repoNames[i] + '</li>');
  }
}

$(function() {
  var user = new User();
  $('form').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    user.getRepos(username, displayRepoNames);
  });
});
