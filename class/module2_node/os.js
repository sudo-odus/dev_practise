let os = require('os')

// console.log(os);
// console.log(os.hostname);

let hostnameis=os.hostname();//returns a string
console.log(hostnameis)

console.log(os.networkInterfaces())