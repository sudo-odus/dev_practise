//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let fs=require("fs");
let path=require("path");

let new_folder=path.join(__dirname,"new_folder");

if(fs.existsSync(new_folder)==false)
    fs.mkdirSync(new_folder);

    // file created
// now to create a file
let new_file=path.join(new_folder,"new_file.txt");
fs.writeFileSync(new_file,"new file has been made");

// completed