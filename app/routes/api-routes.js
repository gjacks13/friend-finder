// Dependencies
// =============================================================
const friendMatch = require("../util/matching");
const friendsData = require("../data/friends");

// Routes
// =============================================================
module.exports = function(app) {  
  app.get("/api/friends", (req, res, next) => {
    res.json(friendsData.getFriends());
  });
  
  app.post("/api/friends", (req, res, next) => {
    let surveyResults = req.body;
    let surveyScores = Object.values(surveyResults);
    let compatibleFriends = [];
    
    // determine friendship compatability
    let friends = friendsData.getFriends();
    let currentBestMatch = {
      name: "",
      totalDifference: null
    };
    friends.forEach(compareFriend => {
      try {
        if (currentBestMatch.totalDifference) {
          let currTotalDifference = friendMatch.calculateCompatabilityDifference(surveyScores, compareFriend.scores);
          if (currTotalDifference < currentBestMatch.totalDifference) {
            currentBestMatch.name = compareFriend.name;
            currentBestMatch.totalDifference = currTotalDifference;
          }
        } else if (currentBestMatch.totalDifference === null) {
          let currTotalDifference = friendMatch.calculateCompatabilityDifference(surveyScores, compareFriend.scores);
          currentBestMatch.name = compareFriend.name;
          currentBestMatch.totalDifference = currTotalDifference;
        } else {
          res.status(500).json({error:"There was an error encountered while trying to find you a friend."});
        }
      } catch(e) {
        console.log(e);
        res.status(500).json({error: "There was an error encountered while trying to find you a friend. Please make sure all questions were answered, and resubmit questionaire."});
      }
    });
  
    // get best friend
    let bestFriendIndex = friendsData.getFriendIndexByName(currentBestMatch.name);
    let bestFriendData  = friendsData.getFriendByIndex(bestFriendIndex);
    
    // return best friend info
    res.json(bestFriendData);
  });
};