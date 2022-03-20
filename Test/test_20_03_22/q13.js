let users = [ { name: "Rajneesh", age: 34, address: { local: "22 Alaknanda", city: "Dehradun", state: "UK", }, orders: [{ id: 1, name: "GOT Book Series" }], }, { name: "Bhavesh", age: 37, address: { local: "48 DT Row", city: "Hyderabad", state: "AP", }, }, { name: "Jasbir", age: 38, address: { local: "196 Lama Bhavan", city: "Gangtok", state: "Sikkim", }, orders: [ { id: 1, name: "Chair" }, { id: 2, name: "PS5" }, ], }, ];

// 1- Create user if does not exist,add orders if any and return users 
// 2- Create and Initialize order's array if it does not exist and add first order and return users 
// 3- Add order to existing order's array and return users 
// 4- If the item is already ordered return {msg:"Already ordered!"}
// unable to understand what the 2nd,3rd and 4th task mean

function updateUsers(users, userObject, item) {

    let arguments_of_the_function=arguments;

    for(let i=0 ; i<users.length ; i++)
    {
        if(users[i].name==userObject.name)
            flag=1;
    }
    if(flag==0)
    {
        if(arguments_of_the_function.length===3)
        {
            // a item exists
            // add to orders key of the userobjects
            // how to check if a key for object exists or not

        }
        users.push(userObject);
    }
    // 1st task completed
}

