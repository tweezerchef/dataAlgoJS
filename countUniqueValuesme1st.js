//implement a function called countUniqueValues which accespt a sorted array of
// numbers and returns the count of unique Values

function countUniqueValues(arr){
    let count = 0
    if(arr.length === 0){
        console.log(count)
        return count
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i+1]){
            count++
        }
    }
    console.log(count)
    return count
}

countUniqueValues([1,1,1,1,1,2])
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])
countUniqueValues([])
countUniqueValues([-2,-1,-1,0,1])


