let obj = {}
console.log(obj);

let myObj ={
    "firstName":"Shubham",
    "lastName":"Shukla",
    "age":22,
    phoneNo:7754123456,
    address:{
        'state':'united',
        'city':'queens'
    },
    friends:['nat','bruce','tony'],
    'sayHi':function x(){
        console.log("cap says hello")
    }
}

console.log(myObj);

// accessing keys of the object
console.log(myObj.firstName);

console.log(myObj.lastName)
console.log(myObj.age)
console.log(myObj.phoneNo)
console.log(myObj.address.city)
console.log(myObj.friends)
console.log(myObj.friends[2])
console.log(myObj.sayHi())
myObj.sayHi()
// x()  //  // //this doesnt works

// adding a new key
myObj.movies=['avengers','civil war','endgame']

console.log(myObj)

// deleting a key

delete myObj.movies
console.log(myObj)

// updating a key

myObj.firstName='updated'

console.log(myObj)
