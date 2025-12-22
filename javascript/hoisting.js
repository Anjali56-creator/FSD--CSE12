//execution context creation phase
//memory creation phase
//a=undefined
//b=undefined
//addNumbers=reference to function
//sumResult=undefined
//sumResult2=undefined

//execution context execution phase
console.log(a);
var a=10;
var b=20;
console.log(b);

function addNumbers(num1,num2){
    var sum=num1+num2;
    return sum;
}

var sumResult1=addNumbers(a,b);
var sumResult2=addNumbers(100,200);
console.log(sumResult1,sumResult2);


//c=uninitialized
//temporal dead zone
console.log(c);
let c=50;