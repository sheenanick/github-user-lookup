var User = require('./../js/user.js').userModule;

var displayProfile = function(photo, followers, userDate, name, email) {
  $('#profile').text(followers + photo + userDate + name + email);
};

var displayRepos = function(repoNames, repoDescriptions, htmlUrl, dateCreated) {
  if(repoNames[0]) {
    for (var i = 0; i < repoNames.length; i++) {
      $('#repos').append('<div class="col-sm-3 repo-col"><div class="col-box">' +
                          '<h4><a href="' + htmlUrl[i] + '" target="_blank">' + repoNames[i] + '</a></h4>' +
                          '<p><em>' + repoDescriptions[i] + '</em></p> ' +
                          '<p>Date Created: ' + dateCreated[i] + '</p>' +
                        '<div></div>');
    }
  } else {
    $('#repos').append('<div class="col-sm-3 repo-col">' +
                        '<h4><em>No Public Repositories</em></h4>' +
                      '</div>');
  }
};

var displayError = function() {
  userFound = false;
  alert('user not found');
};

var username;
var userFound = true;

$(function() {
  var user = new User();
  $('form').submit(function(event) {
    event.preventDefault();
    $('#repos').html("");
    username = $('#username').val();
    user.getProfile(username, displayProfile, displayError);
    if (userFound) {
      user.getRepos(username, displayRepos);
    }
  });
});
