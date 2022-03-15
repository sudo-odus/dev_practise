//copy index.html file from module1 to a new folder inside module2 having name html.

// how to get access of the file which is outside of our scope.
// i will copy calculator.js which is in module folder

let fs=require("fs");
let path=require("path");

let path_of_file_to_copied="C:\\Users\\91638\Desktop\\pepcoding\\dev_practise\\class\\module2_node\\module\\calculator.js"
let copied_file=path.join(__dirname,"new_folder","html");
// console.log(copied_file);
if(fs.existsSync(path_of_file_to_copied)==false)
    console.log("file to hai");
// fs.copyFileSync(path_of_file_to_copied,copied_file);