


function filterArray(array) {
    const numbers = [];
    const numberLength = array.length;
    for (let i = 0; i < numberLength;i += 1) {
        // console.log(array[i]);
        if (Number.isFinite(array[i])) {
            numbers.push(array[i])
        }
    }
    return numbers;
}






console.log(filterArray([-2, 0, 2]));

console.log(filterArray([1, NaN, Infinity]));

console.log(filterArray([0, -0, 100, '100']));

console.log(filterArray([undefined, false, null, [], 1]));

console.log(filterArray([{}, () => {}, 2]));



// const number = 100;
// console.log(Number.isFinite(number));