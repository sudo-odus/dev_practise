//move a file
// moving a file called to_move from module to new_folder

let fs=require("fs");
let path=require("path");

let path_of_the_file=path.join(__dirname,'..','module','to_move.txt');
// if(fs.existsSync(path_of_the_file))
//     console.log("got the file");
// console.log(path_of_the_file);
let path_of_the_destination_file=path.join(__dirname,"to_move.txt");//file name is same 
//because we are showing move operation not copy operation
fs.copyFileSync(path_of_the_file,path_of_the_destination_file);
// if(fs.existsSync(path_of_the_destination_file))
//     console.log("got the file");

// awesome
