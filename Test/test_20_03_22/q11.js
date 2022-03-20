let obj = {"concept":""};

// console.log( JSON.parse( JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12) ).concept );

let x=JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12);
console.log(JSON.parse(x).concept);
// console.log(obj);