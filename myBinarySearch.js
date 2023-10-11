/*
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
*/
const binarySearch = (numArr, numS) => {
    let left = 0;
    let right = numArr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (numArr[mid] === numS) {
            return mid;
        }

        if (numS > numArr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
console.log(binarySearch([1,2,3,4,5],2))
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 10))