// empty array
let arr=[]
console.log(arr);

// array with elements

let elearr=[1,2,'hello',true,'x',3.5]

console.log(elearr);

console.log('element at 0th index is '+elearr[0]);

console.log('element at 4th index is '+elearr[4]);

// array method
// push method
// inserts a value at the end of the array

elearr.push('newly_inserted_in_the_array');
console.log(elearr);

elearr.push(3);
console.log(elearr);
elearr.pop();
console.log(elearr);
elearr.shift();
console.log(elearr);
elearr.unshift(78);
console.log(elearr);