const user={
    username:"Anjali",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username="hjuuu"
user.welcomeMessage()
console.log(this) //in node it is empty set and in browser it is window

//arrow function
const arrowUser = () =>{

    console.log(`${this.username},welcome to website`)
}

const addTwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(2,3))

//implicit return
const addThree=(num1,num2)=>(num1+num2)
console.log(addThree(2,3))

const returnObject=()=>({username:"Anu"})
console.log(returnObject())