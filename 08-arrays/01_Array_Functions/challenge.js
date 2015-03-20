module.exports.reversePlusOne = function(x) {
  var reversedArr = x.reverse();
  reversedArr.unshift(1);
  return reversedArr;
};

module.exports.plusesEverywhere = function(x) {
  return x.join('+');
};

module.exports.arrayQuantityPlusOne = function(x) {
  return x.push(1);
};