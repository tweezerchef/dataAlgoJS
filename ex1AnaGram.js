// create a algo with 0(n) time complexity to check if string is a anagram
function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    let strObj1 = {}
    let strObj2 = {}
    for(let char1 of str1){
        if(!(char1 in strObj1)){
            strObj1[char1] = 1
        }
        else{
            strObj1[char1]++
        }
    }
    for(let char2 of str2){
        if(!(char2 in strObj2)){
            strObj2[char2] = 1
        }
        else{
            strObj2[char2]++
        }
    }
    for(let key in strObj1){
        if(strObj1[key] !== strObj2[key]){
            return false
        }
    }

    return true
}
console.log(validAnagram('rat', 'cat'))
console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('rat', 'cat'))
console.log(validAnagram('texttwisttime', 'timetwisttext'))
