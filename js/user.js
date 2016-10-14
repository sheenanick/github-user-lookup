var apiKey = require('./../.env').apiKey;

function User() {
}

User.prototype.getRepos = function(username, displayFunction) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    var repoNames = [];
    for (var i = 0; i < response.length; i++) {
      repoNames.push(response[i].name);
    }
    displayFunction(repoNames);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
