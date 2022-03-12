// const { dir } = require("console");
let fs=require("fs");
let path=require("path");


let dirname=__dirname;
// creating a directory
let directory=path.join(dirname,"new_folder");

// console.log(directory);

if(fs.existsSync(directory)==false)
{
    // console.log("directory does not exists");
    fs.mkdirSync(directory);
    // directory created
}



// creating a new file in that directory and will then check
let [,base]=fs.readdirSync(__dirname); //getting path of the new folder created

let new_file=path.join(base,"new_file.txt");
// console.log(new_file);
fs.writeFileSync(new_file," created to check the readdirSync operation");

// fs.unlinkSync(new_file);
// now checking directory
let updated_directory=fs.readdirSync(directory);
console.log(updated_directory);   //['new_file'] //working first class  


