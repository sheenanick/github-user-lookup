var User = require('./../js/user.js').userModule;

var displayRepos = function(repoNames, repoDescriptions, htmlUrl) {
  if(repoNames[0]) {
    for (var i = 0; i < repoNames.length; i++) {
      $('#repos').append('<a href="' + htmlUrl[i] + '" target="_blank"><li>' + repoNames[i] + '</a>, <em>' + repoDescriptions[i] + '</em></li>');
    }
  } else {
    alert('user not found');
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
