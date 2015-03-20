module.exports.newArray = function(x,y,z,w) {
  return [x,y,z,w];
};
 

module.exports.firstAndLast = function(x) {
  return [x[0], x[x.length - 1]];
};