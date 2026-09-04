class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email,
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abcd`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const newUser = new user("Anju","damru@gmail.com","123")
console.log(newUser.encryptPassword());
console.log(newUser.changeUsername());