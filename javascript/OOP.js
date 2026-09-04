const user={
    name:"anjali",
    login: 1,
    signedIn:true,
    
    getUserDetails:function(){
       // console.log(this);
    }

}
// console.log(user)
//console.log(user.name)
//console.log(this)



function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
console.log(userOne)
const userTwo = new User("ChaiAurCode", 11, false)
