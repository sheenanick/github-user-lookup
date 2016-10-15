var apiKey = require('./../.env').apiKey;

function User() {
}

User.prototype.getProfile = function(username, displayFunction, displayError) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    var possiblyNull = [];
    var photo = response.avatar_url;
    var followers = response.followers;
    var userDate = moment(response.created_at).format('L');
    possiblyNull.push(response.name);
    possiblyNull.push(response.email);
    for (var i = 0; i < possiblyNull.length; i++) {
      if (possiblyNull[i] === null) {
        possiblyNull[i] = 'not available';
      }
    }
    displayFunction(photo, followers, userDate, possiblyNull[0], possiblyNull[1]);
  }).fail(function(error){
    displayError();
  });
};

User.prototype.getRepos = function(username, displayFunction) {
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    var repoNames = [];
    var repoDescriptions = [];
    var htmlUrl = [];
    var dateCreated = [];
    console.log(response);
    if (response.length > 0) {
      for (var i = 0; i < response.length; i++) {
        repoNames.push(response[i].name);
        htmlUrl.push(response[i].html_url);        dateCreated.push(moment(response[i].created_at).format('L'));
        if (response[i].description) {
          repoDescriptions.push(response[i].description);
        } else {
          repoDescriptions.push('no description');
        }
      }
    } else {
      repoNames.push(false);
    }
    displayFunction(repoNames, repoDescriptions, htmlUrl, dateCreated);
  });
};

exports.userModule = User;
