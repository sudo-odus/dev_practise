// "C:\Users\91638\Desktop\pepcoding\dev_practise\class\module2_node\path.js"

let fs = require("fs");
let path=require("path");

// let baseName=path.basename("C:\Users\91638\Desktop\pepcoding\dev_practise\class\module2_node\path.js")
// let baseeName=path.extname(__filename)

// console.log(baseeName);

//creating  a new file

let dirname=__dirname;

// console.log(dirname);

let newfile = path.join(dirname,"file_new.txt");
// console.log(newfile)

fs.writeFileSync(newfile,"Hello from the new file i was created using writeFileSync of fs module");

let content=fs.readFileSync(newfile,"utf-8");

console.log(content);

// updating the new file
fs.appendFileSync(newfile,"\n updated content using appendFileSync");
console.log("after updation");
let new_content=fs.readFileSync(newfile,"utf-8");
console.log(new_content);

