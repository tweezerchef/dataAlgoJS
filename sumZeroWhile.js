console.profile();

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]]
        }
        else if(sum > 0 ){
            right--
        }
        else{
            left++
        }
    }
    return "not"
}

console.log(sumZero([-4, -3, -2, -1.5, 0, 1, 5, 10]))
console.profileEnd();
