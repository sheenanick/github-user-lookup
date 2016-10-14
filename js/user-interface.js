var User = require('./../js/user.js').userModule;

var displayRepos = function(repoNames, repoDescriptions) {
  if(repoNames[0]) {
    for (var i = 0; i < repoNames.length; i++) {
      $('#repos').append('<li>' + repoNames[i] + ', <em>' + repoDescriptions[i] + '</em></li>');
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
