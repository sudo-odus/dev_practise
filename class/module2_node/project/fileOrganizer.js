let fs=require("fs");
let path=require("path");



// let input=process.argv;
let folder_path=process.argv[2];     //path of the folder to be organised taken as input
// let [,,input]=process.argv; //array destructuring... i like the concept
console.log(folder_path);
folderExists=fs.existsSync(folder_path);

extensions={
    audio:['.mp3'],
    video:['.mp4','.mpeg'],
    image:['.png','.jpeg','.gif'],
    software:['.exe'],
    document:['.doc','.docx','.xlsx','.ppt']

}

function give_folder_name(ext){
    let extension_name=path.extname(ext);
    // console.log(extension_name);
    for(let key in extensions){
        // let extarray=extensions[key];
        for(let i=0 ; i<extensions[key].length ; i++){
            if(extensions[key][i]===extension_name){
                return(key);
            }
        }
    }
    return('others');
}

function move_file(x,y){
    fs.copyFileSync(x,y);
    fs.unlinkSync(x);
}

if(folderExists){
    // console.log("folder exists");
    files=fs.readdirSync(folder_path);
    // console.log(files);
    // awesome 
    files.forEach(element => {
        // console.log("folder for "+element+" is "+give_folder_name(element));
        // code to move file to that folder
        let folder_name=give_folder_name(element);
        let specific_folder_path=path.join(folder_path,folder_name);    //destination folder pathfor the file
        let source_path=path.join(folder_path,element);
        let destination_path=path.join(specific_folder_path,element);
        
        // check if folder exists if exists move if does not create the folder
        if(!fs.existsSync(specific_folder_path))
        {
            // console.log(specific_folder_path);
            fs.mkdirSync(specific_folder_path)
        }

        move_file(source_path,destination_path);
        // if(!fs.existsSync(destination_path))
            // fs.copyFileSync(source_path,destination_path);
        
        // console.log(source_path);
    });
    // after getting folder name just move the file to that folder
    
}
else{
    console.log("Please enter a valid path");
}


// running perfectly...
// now to reuse it for new files as well in the code write a if condition for 
// checking if the element is a file or not .
// if file then perform the code
// if not then skip