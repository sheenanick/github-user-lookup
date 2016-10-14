var User = require('./../js/user.js').userModule;

var displayRepos = function(repoNames, repoDescriptions, htmlUrl, dateCreated) {
  if(repoNames[0]) {
    for (var i = 0; i < repoNames.length; i++) {
      $('#repos').append('<li><a href="' + htmlUrl[i] + '" target="_blank">' + repoNames[i] + '</a>, <em>' + repoDescriptions[i] + '</em> ' + dateCreated[i] + '</li>');
    }
  } else {
    alert('user not found');
  }
};

$(function() {
  var user = new User();
  $('form').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    user.getRepos(username, displayRepos);
  });
});
