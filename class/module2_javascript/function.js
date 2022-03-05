// function without parameters and return
function hello(){
    console.log("hello from functions");

    
}

// function with para
function add(num1,num2){
    let sum=num1+num2;
    console.log(sum);
}

add(12,4);

// function with return type
function mul(num1,num2){
    let pro=num1*num2;
    return(pro);
}

let s=mul(23,5);
console.log(s);

// functions are 1st class citizens in javascript

let a_function = function sub(num1,num2){
    return(num1-num2);
}
// thats why fat arrow functions can also be used the same way

console.log(a_function(12,5)); //can also be called by that variable name

let fat = (x,y) => {
    console.log('modulo of x by y is '+(x%y)+' where x is '+x+' and y is '+y);
}

fat(23,4);

// IIFE immediately invoked function expression

(function(){
    console.log('Hello from iify');
})();

// IIFE with parameters

(function(num1,num2){
    console.log(num1/num2);
})(10,2);

(function(num1,num2,num3){
    console.log('sum of numbers is '+(num1+num2+num3));
})(12,13,45);
