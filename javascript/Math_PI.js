//why pi=~3.14 can not be change
console.log(Math.PI)
Math.PI=7
console.log(Math.PI)
const Ischanged=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(Ischanged)   
//{
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }  because writable is false

const data={
    name:'damru',
    price:800,
}
console.log(Object.getOwnPropertyDescriptor(data,"name"))

Object.defineProperty(data,"name",{
writable:false,
enumerable:false

})
console.log(Object.getOwnPropertyDescriptor(data,"name"))