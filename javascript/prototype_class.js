const obj={
    name:"Anjali",
    age:19,
    greet: function(){
        console.log("Hello");
    }
}
console.log(obj.greet());
obj2={
    age:22,
}
obj2.__proto__=obj;
console.log(obj2.name);
console.log(obj.hasOwnProperty('name'));

class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello I am ${this.name} and my age is ${this.age}`);
    }
}
const p1=new person("Anjali",19);
p1.greet();
class student extends person{
    constructor(name,age,grade){
        super(name,age);
        this.grade=grade;
    }
    study(){
        console.log(`${this.name} is studying in grade ${this.grade}`);
    }
}
const s1=new student("Rohan",20,"A");
s1.greet();
s1.study();
console.log(s1 instanceof student);
console.log(s1 instanceof person);