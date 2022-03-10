let fs=require("fs");
let path=require("path");
// console.log(fs);

let filepath=path.join(__dirname,"file.txt");

console.log(filepath);
// c-create
fs.writeFileSync(filepath,"hello ! i am a text file . I was created using node js fs module");
// r-read
let content=fs.readFileSync(filepath,'utf-8');
console.log(content);

// u-update

fs.appendFileSync(filepath,"\nthis was updated after using append file sync function");

let updated_content=fs.readFileSync(filepath,'utf-8');
console.log(updated_content);
// d-delete
// to check delete un-comment the line below
// dont use simulatenously ..you wont be able to comprehend.LOL

// fs.unlinkSync(filepath);
