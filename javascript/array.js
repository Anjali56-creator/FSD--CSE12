let marks=[2,4,7,4];
// console.log(marks);
// console.log(marks.length);
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

//arr.shift(); //if you want to delete any number at starting it is without parameter.
//console.log(arr);//for delete
//do not use shift or unshift function because it makes algorithm slow
// const arr=[10,30,888,55,87];
// const arr2=arr.slice(2,4);//it does not change into original array
// console.log(arr);
// console.log(arr2);
// const arr3=arr.splice(1,3);//it changes into original array also
// console.log(arr3);
// console.log(arr);

// console.log(arr.includes(10));//it will return true or false

// newArr=[1,2,3,4,5];
// //join converts array into string and it joins all the elements of array into string  
// console.log(newArr.join(" "));//it will join all the elements of array into string and it will return string




//Difference between splice and slice
//slice creates a new array with the selected elements, while splice modifies the original array
arrSplice=[1,2,3,4,5,6,7];
console.log("original array is",arrSplice);
const a=arrSplice.slice(2,5);
console.log("original array is",arrSplice)
console.log("sliced array is",a);


const b=arrSplice.splice(3,5);
console.log("original array is",arrSplice);
console.log("spliced array is",b);