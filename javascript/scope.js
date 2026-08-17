if(true){
    let a=10
  const b=20
   var c=30
//    console.log(a)
//    console.log(b)
//    console.log(c) 
 }

// console.log(a) //won't run because a is block scoped
// console.log(b) //won't run because b is block scoped
console.log(c) //will run because c is function scoped


//nested scope
function one(){
    const userName="Anjali"

    function two(){
        const website="youtube"
        console.log(userName) //will run because userName is in the parent scope
    }
    //console.log(website)//won't run because website is in the child scope
    two()
}
//two() //won't run because two is in the parent scope
one()


/* ++++++++++++++++  there are two types of functions in first one we get 6 but in second it throws error its a hoisting problem+++++++++++++++++++ */
console.log(addone(5))
function addone(num){
    return num+1
}

addtwo(5)
const addtwo=function(num){
    return num+2
}
