function addElementToBeginningOfArray(array, x) {
  var myArray = array;
  return [x, ...myArray]
}

function destructivelyAddElementToBeginningOfArray(array, x) {
  return array.unshift()
}