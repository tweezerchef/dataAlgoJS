// write a function sumZero which finds the first pair in a sorted array
//and returns them as an array with 0(n) time complexity return "not" if not
//found

function sumZero(numArray, point1 = 0, point2 = numArray.length -1){
    //establish pointers
//if we have completed array sum not found return 'not'
if(numArray[point1] >= 0){
    return "Not"
}
//if sum 0 found return number array
if(numArray[point1] + numArray[point2] === 0){
    return [numArray[point1], numArray[point2]]
}
if(numArray[point1] + numArray[point2] >= 0){
    point2--
return sumZero(numArray,point1, point2)
}
if(numArray[point1] + numArray[point2] <= 0){
    point1++
return sumZero(numArray, point1, point2)
}
sumZero(numArray, point1, point2)
}

console.log(sumZero([-4,-2,-2,-1,0,1,2,5]))