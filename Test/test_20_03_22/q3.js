// q3
function average_rainfall(data_3){
    let ans_array=[]
    data_3.forEach(element => {
        let array_of_rain=element.rainfall;
        let avg=0;
        for(let i=0 ; i<array_of_rain.length ; i++)
        {
            avg+=array_of_rain[i];
        }
        avg=avg/array_of_rain.length;

        let x={
            name:element.name,
            avgRainfall:avg
        }
        ans_array.push(x)
    });
    return(ans_array);
}
input=[ { name: "Delhi", rainfall: [2.3, 4, 3.1, 5.5, 1.1, 1.2, 7] }, { name: "Noida", rainfall: [6.3, 0, 0.1, 3.5, 1, 2.6, 0.7] }, { name: "Dehradun", rainfall: [12, 5.6, 3.1, 0.55, 11, 16.2, 19] }, { name: "Nanital", rainfall: [8, 1.4, 0.61, 15.5, 6.6, 2, 9.82] }, ]

let check= average_rainfall(input);
console.log(check);