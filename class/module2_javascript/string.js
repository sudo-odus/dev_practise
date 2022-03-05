let str="i am a string"
console.log(str);

let len=str.length;
console.log(len);

// slice method
let slicedStr = str.slice(2,8);

console.log(slicedStr);

// replace method
// returns a new string ..doesnt edits the exisiting string
let replacedStr = str.replace('am','was');
console.log(replacedStr);
console.log(str);

// toUpper and toLower
let upperCase = str.toUpperCase();
let lowerCase = upperCase.toLowerCase();
console.log(upperCase);
console.log(lowerCase);

let concatenate = upperCase.concat(lowerCase);
console.log(concatenate);

// many more functions can see as vs code recommends
// split(' ') split using a delimiter
// returns a array of objects 