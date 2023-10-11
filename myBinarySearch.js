const binarySearch = (numArr, numS) => {
    if (!Array.isArray(numArr) || typeof numS !== 'number') {
        throw new Error('Invalid inputs. numArr must be an array and numS must be a number.');
    }

    if (numArr.length === 0) {
        return -1;
    }

    if (!isSorted(numArr)) {
        throw new Error("Array is not sorted");
    }

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

const isSorted = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(binarySearch([1,2,3,4,5],2))
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 10))