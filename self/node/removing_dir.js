let fs=require("fs");

let [,,,dir_to_del]=fs.readdirSync(__dirname);   //getting directory path..

// every function of fs uses path ..we store path in variable to keep it simple

fs.rmdirSync(dir_to_del,{recursive:true});
// console.log(dir_to_del);
// removing a directory
// a non empty directory requires { recursive: true } as a parameter to function rmdirSync
// fs.rmdirSync(directory,{ recursive: true });
// awesome 