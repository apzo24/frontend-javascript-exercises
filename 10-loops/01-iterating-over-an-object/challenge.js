module.exports.getKeys = function(object) {
  var result = [];
  for (var x in object) {
    result.push(x);
  }
  return result;
}

module.exports.getValues = function(values) {
  result = [];
  for (var x in values) {
    result.push(values[x]);
  }
  return result;
}

module.exports.objectToArray = function(arr) {
  newArr = [];
  for (x in arr) {
    newArr.push(x + " is " + arr[x]);
  }
  return newArr;
};