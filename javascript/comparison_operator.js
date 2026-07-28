console.log(null>0);
console.log(null<0);
console.log(null==0);
console.log(null>=0);
/*
the reason is that an equality check == and comparison > < >= <= work differently.
comparison operators convert null or undefined to a number before comparison.
*/
console.log(undefined>0);
console.log(undefined<0);
console.log(undefined==0);
console.log(undefined>=0);