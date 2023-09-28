// the ultimate classique

function factorial(num, fact = 1){
    if(num <= 1){
        return fact
    }
    fact *= num
    return factorial(num - 1, fact)
}

console.log(factorial(5))