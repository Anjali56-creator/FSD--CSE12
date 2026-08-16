const mySym=Symbol("key");

const obj={
    name:"Anjali",
    age:21,
    [mySym]:"mykey",
    location:"India",
    email:"anjali@123.gmail.com",
    "full name":"Anjali Kumari",
}
//console.log(obj)

//method to access the object
// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj["full name"]);

//access symbol
//console.log(obj[mySym]);

obj.email="anju@gmail.com"
//console.log(obj.email);
//if we don't want to change the value of email then we can use Object.freeze() method
//Object.freeze(obj)
obj.email="annnn@gmail.com"
console.log(obj);



//function
obj.greeting=function(){
    console.log("hello world");
}
console.log(obj.greeting);//returns the function definition
console.log(obj.greeting());//returns the function execution

obj.greetingTwo=function(){
    console.log(`hello world ${this.name}`);
}

console.log(obj.greetingTwo());