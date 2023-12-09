// find characters in string and occurrence
//naive approach
const string1 = "wowomgzomg";
const char1 = "omg";

const nString = (string, char) => {
  let count = 0;
  let stringCount = 0;
  let stringArray = [];
  for (let i = 0; i < string.length; i++) {
    if (string1[i] === char[stringCount]) {
      stringArray.push(string1[1]);
      stringCount++;
      if (stringArray.length === char1.length) {
        count++;
      }
    } else {
      stringCount = 0;
      stringArray = [];
    }
  }

  if (count === 0) {
    return false;
  }
  return count;
};
console.log(nString(string1, char1));
