module.exports.copy = function(oldCopy) {
  var newCopy = {};
  for (x in oldCopy) {
    newCopy[x] = oldCopy[x];
  }
  return newCopy;
};

module.exports.extend = function(dest, src) {
  for (x in src) {
    dest[x] = src[x];
}
  return dest;
};

module.exports.hasElems = function(x, y) {
for (var i = 0; i < y.length; i++) {
  if (x[y[i]] === undefined) {
    return false;
  }
}
  return true;
};