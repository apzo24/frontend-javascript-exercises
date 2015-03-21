module.exports.createCourse = function(courseTitle, courseDuration, courseStudents) {
  var x = {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents
  }
  return x;
};

module.exports.addProperty = function(object, newProp, newValue) {
  if (object[newProp] === undefined) {
    object[newProp] = newValue;
  }
  return object;
};

module.exports.formLetter = function(letter) {
  return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender;
};

module.exports.canIGet = function(item, money) {
    var list = {
      'MacBook Air': 999,
      'MacBook Pro': 1299,
      'Mac Pro': 2499,
      'Apple Sticker': 1
    };

    amount = list[item];
    return (money >= amount && amount !== undefined);
};