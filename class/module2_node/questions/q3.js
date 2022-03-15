//copy index.html file from module1 to a new folder inside module2 having name html.

// how to get access of the file which is outside of our scope.
// i will copy calculator.js which is in module folder

let fs=require("fs");
let path=require("path");

let path_of_file_to_copied=path.join(__dirname,"..","module","calculator.js");

let copied_file=path.join(__dirname,"new_folder","html.txt");
// console.log(copied_file);
if(fs.existsSync(path_of_file_to_copied)==false)
    console.log("file to ni hai");

fs.copyFileSync(path_of_file_to_copied,copied_file);
console.log(path_of_file_to_copied);

// awesome;
// ..(double_dot) means step back;