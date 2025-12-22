//scope 
//global
//functional
//block level
//let and constant respects all scopes but var only respects funtional and global scope

let a=10;
const b=20;
function greet(){
    console.log(a); 
}
if(true){
    console.log(b);
}

// closure is mainly used for data privacy
function createbankAccount(initialBalance){
    let balance=initialBalance; // private variable
    return {
        deposit(amount){
            balance+=amount;
            console.log(`Deposited: ${amount}, New Balance: ${balance}`);
        },
        withdraw(amount){
            if(amount<=balance){
                balance-=amount;
                console.log(`Withdrew: ${amount}, New Balance: ${balance}`);
            } else {
                console.log('Insufficient funds');
            }
        }
    };
}