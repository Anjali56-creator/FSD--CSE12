const arr=[10,20,"anjali",100];
arr.forEach((number)=>{
    console.log(number);
})

//filter
const arr2=[10,15,20,25,30,35];
const newArr=arr2.filter((number)=>number>25);
console.log(newArr); // [30,35]

//map
const arr3=[1,2,3,4,5];
const newArr2=arr3.map((num)=>num*2);
console.log(newArr2); // [2,4,6,8,10]

//reduce
const arr4=[1,2,3,4,5];
const sum=arr4.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(sum); // 15 

//set
const arr5=[10,20,30,10,20];
console.log(arr5);
const s1=new Set(arr5);
console.log(s1); // Set(3) { 10, 20, 30 }
s1.add(40);
console.log(s1);
s1.delete(20);
console.log(s1);
console.log(s1.has(10));

//map
const map1=new Map();
map1.set('name','anjali');
map1.set('age',25);
console.log(map1);
console.log(map1.get('name'));
map1.delete('age');
console.log(map1.has('age'));
