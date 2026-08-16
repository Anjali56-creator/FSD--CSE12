// function
function greeting(){
    console.log("hello everyone");
}
console.log("Result 1: ",greeting());  //if you print this you will also get undefined because you did not return anything


function greeting(){
    console.log("hello everyone");
    return 100;
}
console.log("Result 2: ",greeting());
console.log("Function name: ",greeting); // it stores function name


function addnumber(num1,num2){
    const sum=num1+num2;
    console.log("Result 3: ",sum);
}
addnumber(4,7);
addnumber(1,8,1);//it ignore remaining one


//for handling extra numerical
function addnumber(num1,num2,num3=0,num4=0){
    const sum=num1+num2+num3+num4;
    console.log("Result 4: ",sum);
}
addnumber(9,6);
addnumber(4,5,7);
addnumber(1,3,4);

// //more refine version
//rest operator

function calculateCartPrice(...price){ //this returns an array that's why we can apply sum or any type of operation on it
    return price
}
console.log(calculateCartPrice(100,200,300,400,500));


function addnumber(...num){
    let sum=0;
    for(let n of num){
        sum+=n;
    }
    console.log("Result 5: ",sum);
}
addnumber(9,6);
addnumber(4,5,7);
addnumber(1,3,4,8,7,5);

const user={
    username:"Anjali",
    price:200,
}

function handleObject(anyobject){
    console.log(`userName is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);

const myArray=[200,400,500,600,720]
