// function
function greeting(){
    console.log("hello everyone");
}
console.log(greeting());  //if you print this you will also get undefined because you did not return anything


function greeting(){
    console.log("hello everyone");
    return 100;
}
console.log(greeting());
console.log(greeting);// it stores function name


function addnumber(num1,num2){
    const sum=num1+num2;
    console.log(sum);
}
addnumber(4,7);
addnumber(1,8,1);//it ignore remaining one


//for handling extra numerical
function addnumber(num1,num2,num3=0,num4=0){
    const sum=num1+num2+num3+num4;
    console.log(sum);
}
addnumber(9,6);
addnumber(4,5,7);
addnumber(1,3,4);

//more refine version
//rest operator
function addnumber(...num){
    let sum=0;
    for(let n of num){
        sum+=n;
    }
    console.log(sum);
}
addnumber(9,6);
addnumber(4,5,7);
addnumber(1,3,4,8,7,5);