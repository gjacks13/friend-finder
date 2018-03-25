const friendsData = {
  friends = [],
  addFriend(name, photo, scores) {
    let friendObj = {
      name : name,
      photo : photo,
      scores: scores
    }
    this.friends.push(friendObj);
  },

  getFriends() {
    return this.friends;
  },

  updateFriend(index, name, photo, scores) {
    if (friendIndex < this.friends.length) {
      let friendObj = {
        name : name,
        photo : photo,
        scores: scores
      }
      this.friends[friendIndex] = friendObj;
    }
  },

  getFriendIndexByName(name) {
    let index = this.friends.indexOf(friend => {
      friend.name === name
    });

    if (index) {
      return index;
    } else {
      throw new Error(`No friend with name '${name}' exists at this index.`);
    }
  },

  getFriendByIndex(index) {
    if (index >= this.friends.length) {
      throw new Error("The index is not in range.");
    }
    return this.friends[index];
  }
};

module.exports(friendsData);