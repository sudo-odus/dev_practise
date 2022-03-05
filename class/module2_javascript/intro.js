
// printing in js

console.log('welcome everyone')

// variables in js and data types

let a=10;

console.log(a);
// character
let b='a';

console.log(b);
// string
let str='I am a string';
console.log(str);

// boolean
let bool=true;
console.log(bool);

// is prime
let x=17;
let flag=0;
for(let i=2;i*i<=20;i++)
{
    if(x%i==0)
        flag=1;
}
if(flag==0)
    console.log('the number is prime');
else    
    console.log('the number is not prime');
