let cp =require('child_process')

// cp.execFileSync('calc')
// console.log(cp.execFileSync('calc'))   this outputs "buffer"


let content=cp.execSync('node testi.js')

console.log("output from another file "+content)