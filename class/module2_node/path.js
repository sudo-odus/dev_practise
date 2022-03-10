// "C:\Users\91638\Desktop\pepcoding\dev_practise\class\module2_node\path.js"

let path=require("path");

let baseName=path.basename("C:\Users\91638\Desktop\pepcoding\dev_practise\class\module2_node\path.js")
let baseeName=path.extname(__filename)

console.log(baseeName);

let dirname=__dirname;

console.log(dirname);

let newfile = path.join(dirname,baseName);
console.log(newfile)