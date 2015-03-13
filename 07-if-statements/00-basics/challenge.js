module.exports.favoriteNumber = function(guessNumber, favoriteNumber) {
  if (guessNumber > favoriteNumber) {
    return "Too low";
  }
  else if (guessNumber < favoriteNumber) {
    return "Too high";
  }
  else if (guessNumber == favoriteNumber) {
    return "You got it!";
  }
};

module.exports.checkLock = function(x, y, z, w) {
  if (x != 3 && x != 5 && x != 7) {
    return "incorrect";
  }
  else if (y != 2) {
    return "incorrect";
  }
  else if (z < 5 || z > 100) {
    return "incorrect";
  }
  else if (w >= 9 && w <= 20) {
    return "incorrect";
  }
  else {
    return "correct";
  }
};

module.exports.canIGet = function(item, money) {
  if (item == "MacBook Air" && money >= 999) {
    return true;
  }
  else if (item == "MacBook Pro" && money >= 1299) {
    return true;
  }
  else if (item == "Mac Pro" && money >= 2499) {
    return true;
  }
  else if (item == "Apple Sticker" && money >= 1) {
    return true;
  }
  return false;
  }
