
let fs=require("fs");
// let path=require("path");


let [,dir_to_read]=fs.readdirSync(__dirname);   //this readirSync current directory returns a list
                                        //and i am storing it using array destructuring

// console.log(dir_to_read);
let red=fs.readdirSync(dir_to_read);
console.log(red);
// awesome