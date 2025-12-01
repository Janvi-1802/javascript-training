let schema={
  name: { type: "string", required: true, minLength: 2 },
  age: { type: "number", min: 0, max: 120 },
  active: { type: "boolean", required: true },
    address: {
    type: "object",
    schema: {
      city: { type: "string", required: true },
      pin: { type: "string" }
    }
  }
}


let data1={
    name : "janvi",
    age:21,
    active:true,
    address:{
        city:"bharuch",
        pin:"392001"
    }
}
let data2={
    name : 67,
    age:21,
    active:true,
    address:{
        city:"bharuch",
        pin:"392001"
    }
}
let data3={
    name : "abc",
    age:-2,
    active:true,
    address:{
        city:"bharuch",
        pin:"392001"
    }
}
let data4={
    name : 67,
    age:21,
    active:"",
    address:{
        city:"bharuch",
        pin:"392001"
    }
}
let data5={
    name : 67,
    age:21,
    active:true,
    address:{
        pin:"392001"
    }
}

let valid=function validate(data,schema)
{
    //1. for name 
    if(!(typeof data.name =='string' && (data.name !=undefined) && (data.name).length>=2) )
        return false;

    //2.for age
    if(!(typeof data.age=='number' && (data.age>=0 && data.age<=120) ))
        return false;

    //3.for active
    if(!(typeof data.active=='boolean' && (data.active !=undefined)))
        return false;

    //4.for address
    if(!(typeof data.address=='object' && addressValidator(data.address)))
        return false;

    return true;
}

function addressValidator(addressObject)
{
    //1. for city
    if(!(typeof addressObject.city=='string' && addressObject.city!=undefined))
        return false;

    //2.for pin 
    if(!(typeof addressObject.pin=='string'))
        return false;

    return true;
}
console.log("for data1 :");
console.log(valid(data1));  //true

console.log("for data2 :")
console.log(valid(data2)); //false

console.log("for data3 :")
console.log(valid(data3)); //false

console.log("for data4 :")
console.log(valid(data4)); //false

console.log("for data5 :")
console.log(valid(data5)); //false
