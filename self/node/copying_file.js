let fs=require("fs");
let path=require("path");

// lets copy the newly created file by us in the newly created folder by us
let [,,,thefolder]=fs.readdirSync(__dirname)   //the folder is at 3rd index in the list returned by
                                                //the function
//not a good way to get access to the folder as on creation of new files in the parent folder
// index of the folder will change
// console.log(fs.readdirSync(__dirname));
console.log(thefolder);
let [the_source_file]=fs.readdirSync(thefolder);

console.log(the_source_file);

// also create the new file in which the content will be copied
let copiedfile=path.join(__dirname,"copiedhere.txt")
fs.writeFileSync(copiedfile,"creating");
// console.log(copiedfile);

// fs.copyFileSync(the_source_file,copiedfile);
// error because the source_file variable only carries the name of the file but not the path
// we need path..now how to get that
// let path_of_the_source_file=path.resolve(the_source_file);
// console.log(path_of_the_source_file);  //showing incorrect path..the new file is in the new folder directory
// fs.copyFileSync(path_of_the_source_file,copiedfile);

let path_of_the_source_file=path.resolve(thefolder,the_source_file); //resolve adds current working directory as base so added the parent of new file there now this 
// should work
console.log(path_of_the_source_file);
fs.copyFileSync(path_of_the_source_file,copiedfile);
// bravo