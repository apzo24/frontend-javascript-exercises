module.exports.sumNumbers = function(arr) { 
  for (var 
    index = 0, 
    length = arr.length, 
    sum = 0;
    index < length;
    sum += arr[index++]
  );
    return sum;
}

module.exports.splitAndLowerCaseString = function(inputString) {
  var array = inputString.split(',');
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].toLowerCase();
  }
   return array;
};

module.exports.addIndex = function(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(i + " is " + arr[i]);
  }
  return newArr;
};