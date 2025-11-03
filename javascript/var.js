console.log("hello")
let name="Anjali";
let age=20;
age=21;//if you assign the value of the same variable again the it will be change.
const account=123654;//if you use const you cannot redefine the same name.
//account=25;
console.log(name,age,account)
//you cannot use let more than one time for the same variable
//the above code written is new but before it 'var' had been in used.
// var a=2;
//a=10;
// datatypes are of two types primitive and non primitive
//primitive are number,string,booolean,undefined,null,bigint,symbol
//non primitive array,object,function
//number
let a=10;
let b=2.36;//floating is come under number
console.log(a,b)
console.log(typeof (a,b))
//string
let c="helloo everyone!!!!";
let d="Anjali"
console.log(c,d);//you can write string
//  in double as well as in single ''
//boolean
let login=true;
let f=false;
console.log(login,f )
//undefined
let user;
console.log(user);
//bigint
let num=12355844564888995632125654n;
console.log(num);
//null : it is used in case when your datasystem has some value regarding that but it is not showing at that time

weather=null; 
console.log(typeof weather)
//symbol
const id1=Symbol("id");
console.log(typeof id1)
const id2=Symbol("id");
console.log(id1==id2);
//non primitive datatype
let arr=[10,20,11,"hiii",true];
console.log(arr);
let data={
    name:'Anjali',
    account:83320991470981499384n,
    age:20,
    category:'OBC-NCL',
}
console.log(data);