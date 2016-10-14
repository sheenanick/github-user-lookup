var User = require('./../js/user.js').userModule;

var displayRepos = function(repoNames, repoDescriptions, htmlUrl, dateCreated) {
  if(repoNames[0]) {
    for (var i = 0; i < repoNames.length; i++) {
      $('#repos').append('<div class="col-sm-3 repo-col">' +
                          '<h4><a href="' + htmlUrl[i] + '" target="_blank">' + repoNames[i] + '</a></h4>' +
                          '<p><em>' + repoDescriptions[i] + '</em></p> ' +
                          '<p>Date Created: ' + dateCreated[i] + '</p>' +
                        '</div>');
    }
  } else {
    $('#repos').append('<div class="col-sm-3 repo-col">' +
                        '<h4><em>No Public Repositories</em></h4>' +
                      '</div>');
  }
};

var displayError = function() {
  alert('user not found');
}

$(function() {
  var user = new User();
  $('form').submit(function(event) {
    event.preventDefault();
    $('#repos').html("");
    var username = $('#username').val();
    user.getRepos(username, displayRepos, displayError);
  });
});
