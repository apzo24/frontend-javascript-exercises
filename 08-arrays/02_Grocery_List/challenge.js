module.exports.addItem = function(x,y) {
  if (y.indexOf(x) == -1) {
    y.push(x);
  }
  return y;
};

module.exports.reverseSortedList = function(x) {
  return list.sort().reverse();
};