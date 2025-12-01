let object1={
    name:"obj1",
    additionalProp1:1,
    additionalProp2:"ghjj",
    address:{
        country:"India"
    }
}


let object2={
    name:"obj2",
    address:{
        city:"bharuch",
        state:"Gujarat"
    },
    department:"CE",
}


    for(key in object2)
    {
        if(key in object1 ==false)
        {   
          
            object1[key] = object2[key];
        }
        else if(typeof object1[key] =="object" && typeof object2[key]=="object")
        {
           
            for(keyss in object2[key])
            {
                object1[key][keyss]=object2[key][keyss];
              
            }
        }
        else 
        {
            
            object1[key]= object2[key];
        }



    }

console.log("merged object1");
for(k in object1)
{
    console.log(`${k}:${object1[k]}`)

}



