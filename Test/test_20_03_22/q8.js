function spoon(input){
    list=input.split(" ");
    // javascript strings are immutable
    let temp1=list[0][0];
    let temp2=list[1][0];
    list[0]=list[0].replace(temp1,temp2);   //replace works on the first occurence
    list[1]=list[1].replace(temp2,temp1);   //replace does not updates the exisiting string ..returns
                                            // a new string
    // list[1][0]=temp;
    // console.log(list);
    ans=list[0]+" "+list[1];
    return(ans);
}

let x="not picking";
let y=spoon(x);
console.log(y);