'use strict';
function reduceArray(array) {
  const len = array.length;
  let total = 0;

  if (!len) {
      return 0;
    } 
  for (let i = 0; i < len; i++) {
    //console.log(array[i]);
    total += array[i];

  }
  return total;
}


console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));
// 5.5