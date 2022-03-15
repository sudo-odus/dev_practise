// read content of unorganised folder and make  an array which has extension name of each file

// i havent pulled unorganised repo but to complete the exercise reading content from the applications
// folder

let fs=require("fs");

let path=require("path");

let application = path.join(__dirname+"\\applications");

let list_of_files = fs.readdirSync(application);

// console.log(list_of_files);
let new_list=[]
list_of_files.forEach(element => {
    new_list.push(path.extname(element));
});

console.log(new_list);

// awesome