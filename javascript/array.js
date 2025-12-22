let marks=[2,4,7,4];
console.log(marks);
console.log(marks.length);
//you can add any types of datatypes
//let arr=[100,30,'anjali',true];
//console.log(arr);
//how to access any element
//console.log(arr[1]);
//as we know primitive datatypes are mutuable+
//arr[1]="soo";
//console.log(arr);
//add any element -->push
//arr.push(200);
//console.log(arr);

//arr.pop();
//console.log(arr);
//arr.unshift(10);//if you want to add any number at starting
//console.log(arr);

//arr.shift();
//console.log(arr);//for delete
//do not use shift or unshift function because it makes algorithm slow
const arr=[10,30,888,55,87];
const arr2=arr.slice(2,4);//it does not change into original array
console.log(arr);
console.log(arr2);
const arr3=arr.splice(1,3);//it changes into original array also
console.log(arr3);
console.log(arr);


