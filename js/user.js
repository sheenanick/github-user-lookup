var apiKey = require('./../.env').apiKey;

function User() {
}

User.prototype.getRepos = function(username, displayFunction) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    var repoNames = [];
    var repoDescriptions = [];
    if (response.length > 0) {
      for (var i = 0; i < response.length; i++) {
        repoNames.push(response[i].name);
        if (response[i].description) {
          repoDescriptions.push(response[i].description);
        } else {
          repoDescriptions.push('no description');
        }
      }
    } else {
      repoNames.push(false);
    }
    displayFunction(repoNames, repoDescriptions);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
