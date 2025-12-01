let printObject= function(object)
{
    for(key in object)
    {
        console.log(`${key}:${object[key]}`);
    }
}

let sanitize = function(obj)
{
    let countOfRemovedKey=0;
    //iterate through key in obj
    for(key in obj)
    {
        if(!obj[key])
        {
            //null, undefined and empty string are falsy value
            delete obj[key];
            countOfRemovedKey++;
            
        }
    }
    return countOfRemovedKey;
}

let myTestingObject={
    name:"",
    age:undefined,
    hobbies: null,
    location:"Gujarat"
}

console.log("before view of object :");
printObject(myTestingObject);

let NoOfRemovedProps=sanitize(myTestingObject);
console.log(`${NoOfRemovedProps} properties are removed from object`);
console.log(" After view : ");
printObject(myTestingObject);



