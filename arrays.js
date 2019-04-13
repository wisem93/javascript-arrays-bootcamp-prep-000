function addElementToBeginningOfArray(array, x) {
  var myArray = array;
  return [x, ...myArray]
}

function destructivelyAddElementToBeginningOfArray(array, x) {
  return array.unshift(x);
}

function addElementToEndOfArray(array,x) {
  var myArray = array;
  return [...myArray, x]
}

function destuctivelyAddElementToEndOfArray(array, x) {
  return array.push(x);
}

function accessElementInArray(array, indexNum) {
  return array[indexNum];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}