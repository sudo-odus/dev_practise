// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type
let path=require("path");
let fs=require("fs");


arr=["audio","video","image","software","documents","applications","other"]

let base_path=__dirname

let array_of_paths=arr.map((x) =>{
    
    return(path.join(base_path,x));
})

// console.log(array_of_paths);//got an array of paths
array_of_paths.forEach(element => {
    if(fs.existsSync(element)==false)
        fs.mkdirSync(element);
    
    
});
// folders created
// now time to create file for each type of folder
let path_of_audio_folder =array_of_paths[0];
let path_of_video_folder =array_of_paths[1];
let path_of_image_folder =array_of_paths[2];
let path_of_software_folder = array_of_paths[3];
let path_of_documents_folder = array_of_paths[4];
let path_of_application_folder = array_of_paths[5];
let path_of_other_folder = array_of_paths[6];


// for audio folder
for(let i=0;i<4;i++)
{
    let path_of_file_to_created=path.join(path_of_audio_folder,i+".mp3");
    if(!fs.existsSync(path_of_file_to_created))
        fs.writeFileSync(path_of_file_to_created,"x");
    // console.log(path_of_file_to_created);
}
// for video folder
for(let i=0;i<4;i++)
{
    let path_of_file_to_created=path.join(path_of_video_folder,i+".mp4");
    if(!fs.existsSync(path_of_file_to_created))
        fs.writeFileSync(path_of_file_to_created,"x");
    // console.log(path_of_file_to_created);
}
// for image folder
for(let i=0;i<4;i++)
{
    let path_of_file_to_created=path.join(path_of_image_folder,i+".jpeg");
    if(!fs.existsSync(path_of_file_to_created))
        fs.writeFileSync(path_of_file_to_created,"x");
    // console.log(path_of_file_to_created);
}
// for software folder
for(let i=0;i<4;i++)
{
    let path_of_file_to_created=path.join(path_of_software_folder,i+".exe");
    if(!fs.existsSync(path_of_file_to_created))
        fs.writeFileSync(path_of_file_to_created,"x");
    // console.log(path_of_file_to_created);
}
// for documents folder
for(let i=0;i<4;i++)
{
    let path_of_file_to_created=path.join(path_of_documents_folder,i+".txt");
    if(!fs.existsSync(path_of_file_to_created))
        fs.writeFileSync(path_of_file_to_created,"x");
    // console.log(path_of_file_to_created);
}
// for application folder
for(let i=0;i<4;i++)
{
    let path_of_file_to_created=path.join(path_of_application_folder,i+".app");
    if(!fs.existsSync(path_of_file_to_created))
        fs.writeFileSync(path_of_file_to_created,"x");
    // console.log(path_of_file_to_created);
}
// for other folders
for(let i=0;i<4;i++)
{
    let path_of_file_to_created=path.join(path_of_other_folder,i+".oth");
    if(!fs.existsSync(path_of_file_to_created))
        fs.writeFileSync(path_of_file_to_created,"x");
    // console.log(path_of_file_to_created);
}

// awesome
// what can do is create another array of extension and use it as outer loop and inner loop for files;
// for(int i=0;i<array_of_paths.length;i++)
// {
//     for(int j=0;j<4;j++){
//         let path_of_file_to_created=path.join(array_of_paths[i],j+array_of_ext[i]);
//         if(!fs.existsSync(path_of_file_to_created))
//             fs.writeFileSync(path_of_file_to_created,"x");
//     }

// }
// but earlier didnt had array of extensions so i did what i could 
// but this one is so simple and efficient automated.