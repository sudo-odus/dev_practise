// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type
let path=require("path");
let fs=require("fs");


arr=["audio","video","image","software","documents","applications","other"]

let base_path=__dirname

let array_of_paths=arr.map((x) =>{
    
    return(path.join(base_path,x));
})

console.log(array_of_paths);//got an array of paths
array_of_paths.forEach(element => {
    if(fs.existsSync(element)==false)
        fs.mkdirSync(element);
    let file=path.join(element,"abc.txt");
    // fs.writeFileSync(file,"samsung");
    fs.unlinkSync(file);
    
});


