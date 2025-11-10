//1:null is loosely equal to undefined only
console.log(null==undefined);
console.log(null===undefined);
console.log(null==0);
console.log(null==" ");
console.log(null==false);
console.log(null==true);
//>,<,>=,<=(null-->number ,undefined-->NaN) 
console.log(null>=0);//true
console.log(null<=0);//true
console.log(null>0);//false
console.log(null<0);//false
console.log(null>=undefined);//false
console.log(undefined>=0);//false

console.log("Rohit"<"Anjali");//compare letter by letter ascii value
console.log(10>='10')//string convert itself to number
console.log(NaN>=NaN);//false
