const friendsData = {
  friends : [
    {
      "name":"Ahmed",
      "photo":"https://images.pexels.com/photos/213117/pexels-photo-213117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "scores":[5,1,4,4,5,1,2,5,4,1]
    },
    {
      "name":"Kadijah",
      "photo":"https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "scores":[1,4,5,2,1,5,4,4,1,5]
    },
    {
      "name":"Brad",
      "photo":"https://images.pexels.com/photos/428341/pexels-photo-428341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "scores":[3,3,4,5,2,1,4,5,4,1]
    },
    {
      "name":"A-aron",
      "photo":"https://images.pexels.com/photos/450271/pexels-photo-450271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "scores":[5,5,5,5,5,5,5,5,5,1]
    },
    {
      "name":"Forrest",
      "photo":"https://images.pexels.com/photos/462680/pexels-photo-462680.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "scores":[1,1,4,4,5,3,2,5,2,1]
    },
    {
      "name":"Nola",
      "photo":"https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "scores":[4,1,3,2,5,4,2,5,2,1]
    }
  ],
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
    let index = this.friends.findIndex(friend => {
      return friend.name === name;
    });

    if (index !== -1) {
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

module.exports = friendsData;