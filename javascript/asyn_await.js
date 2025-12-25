//async function always returns a promise


async  function greet(){
    return "anjali";
}
// const response=greet();
// response.then((data)=>console.log(data))
// .catch((error)=>{
//     console.log("Error:",error);
// })

// const response2=await fetch("https://api.github.com/users");
// const data=await response2.json();
// console.log(data);

//now the thing is await freezes the other code till the function did not completed which is not good because javascript did not wait for anyone.
//so we use async function.

async function github(){
    console.log("hello jii");
    const response2=await fetch("https://api.github.com/users");
    const data=await response2.json();
    console.log(data);
    console.log("hi");
}
github();
console.log("heeee");