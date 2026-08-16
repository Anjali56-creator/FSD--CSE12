const tinderUser={}
tinderUser.id="123abc";
tinderUser.name="Anjali";
tinderUser.isLoggedIn=true;
console.log(tinderUser);


const regularUser={
    email:"none@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Anjali",
            lastname:"kumari",
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

//how to join objects
const obj1={1:"a",2:"b",3:"c"};
const obj2={4:"d",5:"e",6:"f"};
const obj3={obj1,obj2};
console.log(obj3);
const obj4={...obj1,...obj2};
console.log(obj4);


//destructuring

const course={
    coursename:"ReactJS",
    price:999,
    courseInstructor:"Anjali",
    courseDescription:"This is a ReactJS course",
    courseContent:"This is a ReactJS course content",
}

//accessing the object using destructuring
const{coursename}=course
console.log(coursename);

//or
const{coursename:a}=course
console.log(a);


//api concept:it is present in json format