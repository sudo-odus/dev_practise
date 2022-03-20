// dec to bin

function dec_to_bin(decimal){
    let binary=[];
    while(decimal){
        binary.unshift(decimal%2);
        decimal=Math.floor(decimal/2);
    }
    let ans="";
    binary.forEach(function (element){
        ans+=element;
    })
   
    return(ans);

}

let x=86;
let y=dec_to_bin(x);
console.log(y);