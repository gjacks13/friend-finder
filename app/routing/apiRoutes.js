const express = require("express");
const friendMatch = require("./util/matching/friendMatch");
const friendsData = require("../data/friends");

const friends = [];

express.get("/api/friends", (req, res, next) => {
  res.json(friends);
});

express.post("/api/friends", (req, res, next) => {
  let survey = req.body;
  let postedScores = survey.scores;
  let compatibleFriends = [];
  
  // determine friendship compatability
  let friends = friendsData.getFriends();
  let currentBestMatch = {
    name: "",
    totalDifference = null
  };
  friends.forEach(compareFriend => {
    if (currentBestMatch.totalDifference) {
      let currTotalDifference = friendMatch.calculateCompatabilityDifference(postedScores, compareFriend.scores);
      if (currTotalDifference < currentBestMatch.totalDifference) {
        currentBestMatch.name = compareFriend.name;
        currentBestMatch.totalDifference = currTotalDifference;
      }
    }
  });

  // get best friend
  let bestFriendIndex = friendsData.getFriendIndexByName(currentBestMatch.name);
  let bestFriendData  = friendsData.getFriendByIndex(bestFriendIndex);
  res.send("Found compatible friends.");
});