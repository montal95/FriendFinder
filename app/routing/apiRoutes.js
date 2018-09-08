//requires the file that contains the user list
var friendArray = require("../data/friends.js");

module.exports = function(app) {
  //returns all the json objects from friends.js
  app.get("/api/users", function(req, res) {
    return res.json(friendArray);
  });

  app.post("/api/friends", function(req, res) {
    //console.log('user info'+req.body);
    var user = req.body;
    var userScores = user.scores;
    //console.log('user scores= ' + userScores);

    //create variables
    var friendName = "";
    var friendPic = "";
    var totalDifference = 50;

    for (var i = 0; i < friendArray.length; i++) {
      var differential = 0;
      for (var s = 0; s < userScores.length; s++) {
        //adds the differences between the scores of the user and friends from the friendArray
        differential += Math.abs(friendArray[i].scores[s] - userScores[s]);
      }
      //if the new differential is less than the initial totalDifference value...
      if (differential < totalDifference) {
        //differential becomes the new lowest
        totalDifference = differential;
        //friend information is entered for the new lowest differential score
        friendName = friendArray[i].name;
        friendPic = friendArray[i].photo;
      }
    }

    //adds the new user to the array
    friendArray.push(user);

    console.log(friendArray);
    console.log("Friend Name: " + friendName);

    //returns the closest match name and image
    res.json({ friendName: friendName, friendPic: friendPic });
  });
};
