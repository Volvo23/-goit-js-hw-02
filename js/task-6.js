function mapArray(array) {
  'use strict';
  const newArray = [];
  const numbers = array.length;
  for(let i = 0; i < numbers; i += 1) {
      newArray.push(array[i] * 10);
    
    
  }
  return newArray;
}

console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]