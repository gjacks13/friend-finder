const friendMatch = {
  calculateCompatabilityDifference(scoreSetA, scoreSetB) {
    if (scoreSetA.length !== scoreSetB.length) {
      throw new Error("The socre sets are incompatible; the scores cannot be compared.");
    }
    let totalDifference = 0;
    for (let i = 0; i < scoreSetA.length; i++) {
      totalDifference += Math.abs(scoreSetA[i] - scoreSetB[i]);
    }
    return totalDifference;
  }

};

module.exports(friendMatch);