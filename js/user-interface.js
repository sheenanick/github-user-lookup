var User = require('./../js/user.js').userModule;

var displayProfile = function(photo, followers, userDate, name, email) {
  $('#profile-div').append('<div id="profile">' +
                            '<img class="img-responsive" src="' + photo + '">' +
                            '<h3>' + username + '</h3>' +
                            '<h6>Name: ' + name + '</h6>' +
                            '<h6>Email: ' + email + '</h6>' +
                            '<h6>Followers: ' + followers + '</h6>' +
                            '<h6>Member since: ' + userDate + '</h6></div>');
};

var displayRepos = function(repoNames, repoDescriptions, htmlUrl, dateCreated) {
  if(repoNames[0]) {
    for (var i = 0; i < repoNames.length; i++) {
      $('#repos').append('<div class="col-sm-4 repo-col"><div class="col-box">' +
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
  $('#user-input').addClass('has-error has-feedback');
  $('#glyphicon').addClass('glyphicon glyphicon-remove form-control-feedback');
  $('#help-block').show();
};

var resetSearch = function() {
  userFound = true;
  $('#profile-div').html("");
  $('#repos').html("");
  $('#user-input').removeClass('has-error has-feedback');
  $('#glyphicon').removeClass('glyphicon glyphicon-remove form-control-feedback');
  $('#help-block').hide();
};

var username;
var userFound;

$(function() {
  var user = new User();
  $('form').submit(function(event) {
    event.preventDefault();
    resetSearch();
    username = $('#username').val();
    user.getProfile(username, displayProfile, displayError);
    if (userFound) {
      user.getRepos(username, displayRepos);
    }
  });
});
