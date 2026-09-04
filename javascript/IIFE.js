//Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined.
//it is used to avoid polluting the global scope and to create a private scope for variables and functions.
// ()()


//named iife
(function add(){
    console.log(`hii woi`);
})();
//you have to put semicolon to the previous iife when you have to run more than one iife simultaneously


//normal iife
( ()=>{
    console.log(`connected`);
})();


//parameterized iife
( (name) => {
    console.log(`Hello, ${name}!`);
} )(`Alice`);
